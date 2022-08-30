function pdf(){
    const e = document.querySelector(".container");

    e.style.maxwidth = "700px";

    const opt ={
        filename: "CV_StevenLie.pdf",
        image:{
            type:"jpp",
            quality:0.99
        },
        margin:0,
        JsPDF:{
            unit:"pt",
            format: "letter",
            orientation:"potrait"
        },
        pagebreak:{
            mode:["avoid-all","css","legacy"]
        }
    };
    html2pdf().set(opt).from(e).save();

    setTimeout(()=>{e.style.maxwidth="1400px";},2000);
}