<?php

    $nome = addslashes($POST['nome']);
    $email = addslashes($POST['email']);
    $pedido = addslashes($POST['pedido']);

    $para = "";
    $assunto = " Pedido de Orçamento - ".$nome;

    $cabecalho = "From: " .$email. "\n". "Reply-to: " .$para. "\n" ."X=Mailer:PHP/".phpversion();

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Solicitação de Orçamento"."\n".$pedido;

    if(mail($para,$assunto,$corpo,$cabecalho)) {
        echo("E-mail enviado com sucesso!")
    } else {
        echo("Houve um erro ao enviar o e-mail!");
    }
?>