async function fetchWithRetry(url){
  const attempts = 3;
  for(let i=0;i<attempts;i++){
    try{
      const controller = new AbortController();
      const timeoutId = setTimeout(()=>controller.abort(),15000);
      const res = await fetch(url,{signal:controller.signal});
      clearTimeout(timeoutId);
      if(res.ok) return await res.text();
      throw new Error(`HTTP ${res.status}`);
    }catch(e){ if(i===attempts-1) throw e; await new Promise(r=>setTimeout(r,500*(i+1))); }
  }
}
fetchWithRetry('https://gutendex.com/books/?topic=romance&page=1')
  .then(txt=>console.log('OK length',txt.length))
  .catch(err=>console.error('ERR',err));
