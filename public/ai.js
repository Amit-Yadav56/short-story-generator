import OpenAI from "openai";
// const openai = new OpenAI({
//   apiKey: process.env.Api_key,
// });
const openai = new OpenAI({
  apiKey: "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"
});

const openfun=async(value)=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": `Create short story about ${value}`}],
    max_tokens:20
  });
  console.log(chatCompletion.choices[0]?.message?.content);
  return (chatCompletion.choices[0]?.message?.content);
  
}
export {openfun};

// openfun();
// function req(){
//   const val=document.getElementById('prom').value;
//   document.querySelector('.Story').innerHTML=openfun(val);
// }
  

