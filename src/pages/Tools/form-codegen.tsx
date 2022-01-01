import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

export function FormCodeGen() {
  const [getFormName, setFormName] = createSignal("");
  const list = ["2", "4"];
  const [formFields, setFormFields] = createStore<{
    fields: { name: string; value: string; type: "text" }[];
  }>({
    fields: [],
  });
  let input: HTMLInputElement | null = null;
  return (
		<>
      <input
        type="text"
        ref={input}
        onChange={(e) => setFormName(e.currentTarget.value)}
        value={getFormName()}
				/>
      <br />
				<pre>{JSON.stringify(formFields.fields, null, 2)}</pre>
      <For each={formFields.fields} fallback={<div>Add an item...</div>}>
        {(item, index) => (
          <div>
            <FormField
              name={item.name}
              value={item.value}
              type={item.type}
              onChange={(val: any) => {
                setFormFields(
                  "fields",
                  (f) => f.name === item.name,
                  "value",
                  (v) => val
                );
              }}
            />
          </div>
        )}
      </For>
      <button
        onClick={() => {
          setFormFields((f) => ({
            fields: [
              ...f.fields,
              { name: getFormName(), value: "", type: "text" },
            ],
          }));
          if (input) {
            input.value = "";
            input.focus();
          }
        }}
      >
        add field
      </button>
    </>
  );
}

function FormField(props: {
  name: string;
  value: string;
  onChange: Function;
  type: string;
}) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
			placeholder="Enter"
    />
  );
}
