var uploadDetails = () => {
    let uploadfile = $("input[name=prodImage]")[0].files[0] // file from input
    console.log($("input[name=prodImage]"));
    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    var imageUploadReq = $.ajax({
        url: '/data/upload/productImage',
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        dataType: 'JSON'
    });
    imageUploadReq.done((response) => {
        console.log("Success");
        console.log(response)
    });

    imageUploadReq.fail((err) => {
        console.log("error")
    });
    
}