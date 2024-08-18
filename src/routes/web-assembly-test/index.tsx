import { createEffect, createSignal } from "solid-js"
import Layout from "~/components/Layout/Layout";

type Window = typeof window & {Go:any,PrettifyJSON:(json:string)=>string }

export default ()=>{

	const [formattedJSON,setFormattedJSON] = createSignal("")

	createEffect(()=>{
		const go = new (window as typeof window & {Go:any}).Go();
    WebAssembly.instantiateStreaming(fetch("/main.wasm"), go.importObject).then((result) => {
      go.run(result.instance);
    });
	})

	function prettify(e:any){
		const content = (e.target.value+"").trim()
		if(!content) return
		setTimeout(()=>{
			console.time()
			setFormattedJSON((window as Window).PrettifyJSON(e.target.value))
			console.timeEnd()
		},50)
		console.time("jstime")
		JSON.stringify(JSON.parse(content))
		console.timeEnd("jstime")
	}
	

	return <Layout>
	<main class="container" style="height:100vh">
		<section>
			<div class="grid">
				<div > 
					<textarea name="json" style="min-height:50vh" onChange={prettify}>

					</textarea>
				</div>
				<div>
					<pre style="min-height:50vh;text-align:left;max-height:80vh" class="overflow-auto"><code>{formattedJSON}</code></pre>
				</div>
			</div>
		</section>
	</main></Layout>
}   