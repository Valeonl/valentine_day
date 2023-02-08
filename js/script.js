//Регулярное выражение для проверки кода
const regexp = /\d[A-Z,a-z]\d\d[A-Z,a-z][A-Z,a-z]\d/
function getWunch(){
    code = document.getElementById('code_value').value.toUpperCase(); 
    if(code.length != 7 || !regexp.test(code))  
        {
            alert('Введённый код не соответсвует формату: 0А00АА0');
            return;
        } 
    desire_text = CodeArray[code];
    document.getElementById('desire').value = `"${desire_text}"`;    
    front =  document.querySelector('.front');
    back =  document.querySelector('.back');
    front.style.transform = 'rotateY(180deg)';
    back.style.transform = 'rotateY(360deg)';
    
    
       
}

async function Screenshot(){
    var constraints = {
        preferCurrentTab: true,
        audio: false,
        video: {
          width: { ideal: 1920, max: 7680 },
          height: { ideal: 1080, max: 4320 }
        }
      }
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
        const video = document.createElement("video");

        video.addEventListener("loadedmetadata", () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;

            video.play();

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            //stream.getVideoTracks()[0].stop();
            document.body.appendChild(canvas);
            /*
            let a = document.createElement("a");
            a.download = "ss.png";
            a.href = canvas.toDataURL("image/png");
            a.click();
            */
        });
        video.srcObject = stream;
        console.log(stream);
    }
    catch (error) {
        console.log(error);
    }
}