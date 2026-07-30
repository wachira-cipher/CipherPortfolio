export const contactConfirmationEmail = ({
    name
}) => {

    return `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<style>

body{
    margin:0;
    padding:40px;
    background:#f4f6f9;
    font-family:Arial,Helvetica,sans-serif;
}

.container{
    max-width:650px;
    margin:auto;
    background:#fff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
}

.header{
    background:${process.env.APP_PRIMARY_COLOR};
    color:white;
    text-align:center;
    padding:35px;
}

.header img{
    width:90px;
    margin-bottom:15px;
}

.content{
    padding:35px;
    line-height:1.8;
}

.button{
    display:inline-block;
    padding:14px 28px;
    background:${process.env.APP_PRIMARY_COLOR};
    color:white !important;
    text-decoration:none;
    border-radius:6px;
    margin-top:20px;
}

.footer{
    background:#f8f9fa;
    text-align:center;
    padding:25px;
    color:#666;
    font-size:13px;
}

</style>

</head>

<body>

<div class="container">

<div class="header">

<img src="${process.env.APP_LOGO}">

<h1>${process.env.APP_NAME}</h1>

</div>

<div class="content">

<h2>Hello ${name}, 👋</h2>

<p>

Thank you for contacting me through my portfolio website.

</p>

<p>

I have successfully received your message and will review it as soon as possible.

</p>

<p>

I normally reply within <strong>24 hours</strong>.

</p>

<a

href="${process.env.APP_URL}"

class="button"

>

Visit Portfolio

</a>

<p>

Regards,<br>

<strong>${process.env.OWNER_NAME}</strong><br>

Software Engineer

</p>

</div>

<div class="footer">

© ${new Date().getFullYear()} ${process.env.APP_NAME}

</div>

</div>

</body>

</html>

`;

};