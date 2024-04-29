<?php
// Simulação de carregamento do menu a partir de uma fonte de dados (por exemplo, banco de dados)
$menuItems = array(
  array('text' => 'Home', 'url' => 'index.html'),

  array('text' => 'Rede Social', 'submenu' => array(
    array('text' => 'LinkedIn', 'url' => 'linkedin.php')
  )),

  array('text' => 'Universidade', 'url' => 'ualg.php')
);

// Construir o HTML do menu
function buildMenu($items) {
  $html = '<ul>';
  foreach ($items as $item) {
    $html .= '<li>';
    if (isset($item['submenu'])) {
      $html .= '<a href="#">' . $item['text'] . '</a>';
      $html .= buildMenu($item['submenu']);
    } else {
      $html .= '<a href="' . $item['url'] . '">' . $item['text'] . '</a>';
    }
    $html .= '</li>';
  }
  $html .= '</ul>';
  return $html;
}

echo buildMenu($menuItems);
?>
