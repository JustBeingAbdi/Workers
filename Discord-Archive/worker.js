addEventListener('fetch', function(event) {
  event.respondWith(handleRequest(event.request))
  
})

/**
 * Receives a HTTP request and replies with a response.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
    

  
  let urlparams = new URL(request.url);
  let path = request.url.replace("https://archive.dtranscript.cf/").replace("https://icy-credit-d026.crompto-dev.workers.dev/").replace("icy-credit-d026.crompto-dev.workers.dev/").replace("archive.dtranscript.cf");

  
  let id = urlparams.searchParams.get("id");
  if(!id){
     const data = {
    status: "400",
    message: `No "ID" paramter was provided`,
  }

  

  const json = JSON.stringify(data, null, 2)

  return new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  }
  let download = urlparams.searchParams.get("download");
  if(download === 'true'){
      let downloadlink = `https://cdn.discordapp.com/attachments/840284436402274304/${id}/Transcript_Generated_By_Discord_Transcript.html`
      let html1 = `<!DOCTYPE html>
<body>
    <iframe src="${downloadlink}" style="display: none;">
    Your browser doesn't support iframes
</iframe>
<p> Transcript Downloaded
</body>`

return new Response(html1, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })

  }


  let iframelink = encodeURI(`https://discord-archive.herokuapp.com/api/view?uri=https://cdn.discordapp.com/attachments/840284436402274304/${id}/Transcript_Generated_By_Discord_Transcript.html`)
  console.log(iframelink)
  
  
  
const html = `<!DOCTYPE html>
<body>
    <iframe src="${iframelink}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Your browser doesn't support iframes
</iframe>
</body>`


return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })




  

  

   
}

