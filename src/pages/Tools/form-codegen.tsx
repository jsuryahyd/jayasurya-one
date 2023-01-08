import { createSignal, For, Match, Switch } from "solid-js";
import { createStore } from "solid-js/store";
type inputTypes = "text" | "number" | "email" | "checkbox" | "radio" | "select";
export function FormCodeGen() {
  const [getFormName, setFormName] = createSignal("");
  const [getFieldType, setFieldType] = createSignal<inputTypes>("text");
  const list = ["2", "4"];
  const [formFields, setFormFields] = createStore<{
    fields: {
      name: string;
      value: string;
      type: inputTypes;
      options: string[];
    }[];
  }>({
    fields: [],
  });
  let input: HTMLInputElement | null = null;
  let optionsInputRef: HTMLInputElement | null = null;
  return (
    <>
      <select
        onChange={(e) => setFieldType(e.currentTarget.value as inputTypes)}
      >
        <option value="text">Text input</option>
        <option value="number">Number input</option>
        <option value="email">Email input</option>
        <option value="checkbox">Checkbox (Multiple selections)</option>
        <option value="radio">Radio (Single selection)</option>
        <option value="select">Selection Dropdown</option>
      </select>
      <input type="text" ref={optionsInputRef} placeholder="options" />
      <input
        type="text"
        ref={input}
        onChange={(e) => setFormName(e.currentTarget.value)}
        value={getFormName()}
      />
      <button
        onClick={() => {
          const options = optionsInputRef.value?.split(",");
          setFormFields((f) => ({
            fields: [
              ...f.fields,
              {
                name: getFormName(),
                value: "",
                options: options,
                type: getFieldType() || "text",
              },
            ],
          }));
          if (input) {
            input.value = "";
            input.focus();
          }
          if (optionsInputRef) {
            optionsInputRef.value = "";
          }
        }}
        style={{ "margin-left": "1rem" }}
      >
        Add field
      </button>
      <br />
      <pre>{JSON.stringify(formFields.fields, null, 2)}</pre>
      <For each={formFields.fields} fallback={<div>Add an item...</div>}>
        {(item, index) => (
          <div style={{ "margin-bottom": "0.5rem" }}>
            <FormField
              name={item.name}
              value={item.value}
              type={item.type}
              options={item.options}
              onChange={(val: any) => {
                setFormFields(
                  "fields",
                  (f) => f.name === item.name,
                  "value",
                  (v) => val
                );
              }}
              lable={item.name}
              onLabelChange={(v: string) =>
                setFormFields((store) => {
                  return {
                    ...store,
                    fields: store.fields.map((f) =>
                      f.name === item.name ? { ...f, name: v } : f
                    ),
                  };
                })
              }
            />
          </div>
        )}
      </For>
    </>
  );
}

function FormField(props: {
  name: string;
  value: string;
  onChange: Function;
  type: inputTypes;
  lable: string;
  options: string[];
  onLabelChange: Function;
}) {
  console.log(props);
  return (
    <label>
      {JSON.stringify(props)}
      <input
        style={{
          background: "transparent",
          display: "block ",
          border: "none",
          color: "#fff",
        }}
        onchange={(e) => props.onLabelChange(e.currentTarget.value)}
        value={props.lable || ""}
      />
      <Switch
        fallback={
          <input
            name={props.name}
            value={props.value}
            type={props.type}
            onChange={(e) => props.onChange(e.currentTarget.value)}
            placeholder="Enter"
          />
        }
      >
        <Match
          when={
            props.type == "text" ||
            props.type === "number" ||
            props.type === "email"
          }
        >
          <input
            name={props.name}
            value={props.value}
            type={props.type}
            onChange={(e) => props.onChange(e.currentTarget.value)}
            placeholder="Enter"
          />
        </Match>
        <Match when={props.type === "checkbox"}>
          {(props.options || []).map((o) => {
            return (
              <>
                <input
                  type="checkbox"
                  name={props.name}
                  value={o}
                  id={o}
                ></input>
                <label htmlFor={o}>{o}</label>
              </>
            );
          })}
        </Match>
        <Match when={props.type === "radio"}>
          {(props.options || []).map((o) => {
            return (
              <>
                <input type="radio" name={props.name} id={o} value={o}></input>{" "}
                <label htmlFor={o}>{o}</label>
              </>
            );
          })}
        </Match>
        <Match when={props.type === "select"}>
          <select name={props.name}>
            {(props.options || []).map((o) => {
              return <option value={o}>{o}</option>;
            })}
          </select>
        </Match>
      </Switch>
    </label>
  );
}
