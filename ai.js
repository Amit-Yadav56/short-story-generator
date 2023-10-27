import OpenAI from "openai";
// const openai = new OpenAI({
//   apiKey: process.env.Api_key,
// });
const openai = new OpenAI({
  apiKey: "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"
});

export const openfun=async(value)=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `Create short story about ${value}`}],
    max_tokens:20
  });
  return (chatCompletion.choices[0]?.message?.content);
}
// openfun();
// function req(){
//   const val=document.getElementById('prom').value;
//   document.querySelector('.Story').innerHTML=openfun(val);
// }
  

