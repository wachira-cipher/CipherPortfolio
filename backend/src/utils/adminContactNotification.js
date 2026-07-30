export const adminContactNotification = ({
    name,
    email,
    subject,
    message
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
    color:#fff;
    text-align:center;
    padding:35px;
}

.header img{
    width:90px;
    margin-bottom:15px;
}

.content{
    padding:35px;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:14px;
    border-bottom:1px solid #eee;
}

.label{
    width:140px;
    font-weight:bold;
}

.message{
    margin-top:25px;
    background:#f8f9fa;
    padding:18px;
    border-radius:8px;
    white-space:pre-wrap;
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

<p>New Contact Request</p>

</div>

<div class="content">

<h2>📩 Someone contacted you</h2>

<table>

<tr>
<td class="label">Name</td>
<td>${name}</td>
</tr>

<tr>
<td class="label">Email</td>
<td>${email}</td>
</tr>

<tr>
<td class="label">Subject</td>
<td>${subject}</td>
</tr>

<tr>
<td class="label">Received</td>
<td>${new Date().toLocaleString()}</td>
</tr>

</table>

<div class="message">

${message}

</div>

</div>

<div class="footer">

<b>${process.env.APP_NAME}</b><br>

${process.env.APP_URL}

</div>

</div>

</body>

</html>

`;

};