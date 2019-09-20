$(document).on("click", "#botao1", function(){

  $(location).attr('href', 'servico.html')
})

$(document).on("click", "#botao2", function(){

  $(location).attr('href', 'eventos.html')
})

$(document).on("click", ".nav1", function(){
  $(location).attr('href', 'index.html')
})

$(document).on("click", ".nav2", function(){
  $(location).attr('href', 'servico.html')
})

$(document).on("click", ".nav3", function(){
  $(location).attr('href', 'eventos.html')
})

$(document).on('click', '.conteudo1', function(){

  window.open('https://www.google.com/search?sxsrf=ACYBGNShz83HWbu-FkzcgxvJobnsQSPnQQ%3A1568985885331&ei=HdOEXa_1E--45OUPvv6uoA0&q=Lazer+em+Mongagua&oq=Lazer+em+Mongagua&gs_l=psy-ab.3..0i7i30.78442.79417..79511...0.3..0.130.506.0j4......0....1..gws-wiz.......0i71.lT21CW13pkw&ved=0ahUKEwjv9-jyv9_kAhVvHLkGHT6_C9QQ4dUDCAs&uact=5', '_blank');

})

$(document).on('click', '.conteudo2', function(){
  window.open('https://www.google.com/search?sxsrf=ACYBGNRNh_QHqVhR3UQVe6VVOGBNlT_h9Q%3A1568985986842&ei=gtOEXYWMM5nC5OUP6LeUgAQ&q=Hotelaria+em+Mongagua&oq=Hotelaria+em+Mongagua&gs_l=psy-ab.3..0i13l7j0i13i30l3.44158.46253..46383...0.3..2.247.1944.0j11j2......0....1..gws-wiz.......0i71j35i304i39j0i7i30.uy8iwmxpzP4&ved=0ahUKEwiF1ZyjwN_kAhUZIbkGHegbBUAQ4dUDCAs&uact=5', '_blank');
})

$(document).on('click', '.conteudo3', function(){
  window.open('https://www.google.com/search?sxsrf=ACYBGNT974T9ANcT5reQc3d2B6xG7vcQqA%3A1568986034358&ei=stOEXYvIFaGj5OUPmJ2VqAI&q=Restaurante+em+Mongagua&oq=Restaurante+em+Mongagua&gs_l=psy-ab.3..35i304i39j0i13j0i7i30l8.35339.36702..36768...0.9..0.144.1320.0j10......0....1..gws-wiz.......0i71j38.a1qYbvT3xaM&ved=0ahUKEwiL6fC5wN_kAhWhEbkGHZhOBSUQ4dUDCAs&uact=5', '_blank');
})
      function slide1(){
    document.getElementById('aparecerImagem').src="imagens/MongaguaF.jpg";
    setTimeout("slide2()", 1000)
    }

    function slide2(){
    document.getElementById('aparecerImagem').src="imagens/imagem3Monga.jpg";
    setTimeout("slide3()", 1000)
    }

    function slide3(){
    document.getElementById('aparecerImagem').src="imagens/praiaMonga.jpg";
    setTimeout("slide1()", 1000)
    }
