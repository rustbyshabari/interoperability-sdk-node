import * as wasm from "@aiamitsuri/interoperability-wrapper-wasm";

const fetchInterop = async (json: string) => {
    const res = await wasm.fetch_from_js(JSON.parse(json));
    return JSON.stringify(res, null, 2);
};

try {
    console.log("TS SDK");
    const result = await fetchInterop('{"page": "1"}');
    console.log(result);
} catch (e) {
    console.error("Error:", String(e));
}