$(() => {


  $("input[type='submit']").on("click", (event) => {
    i = Math.floor(Math.random() * 671)
  });

  const random = () => {
    horoscope = Math.floor(Math.random() * (data.episode.length))
  };

  const $openBtn = $('#openModal');

  // Grabbing modal element
  const $modal = $('#modal');

  // Grabbing close button
  const $closeBtn = $('#close');

  const openModal = () => {
    $modal.css('display', 'block')
  }

  const closeModal = () => {
    $modal.css('display', 'none')
  }

  $openBtn.on('click', openModal)
  $closeBtn.on('click', closeModal)



  $("form").on("submit", (e) => {
    e.preventDefault();
    $(".name").empty();
    $('.photo').empty();
    const $closeBtn = $('#close');
    $closeBtn.on('click', closeModal)

    const userInput = $('input[type="text"]').val();

    //    $("button").on("click", (e) => {
    //    let (i = 0;)
    //  })

    $.ajax({
      url: `https://rickandmortyapi.com/api/character/${i}`,
      //type: "GET",
      // data: {
      //   $limit: userInput,
      // },
    }).then((data) => {
      e.preventDefault()
      const $newdiv = $("<div>").text(data.name).addClass('.character-name').prependTo($(".name"));
      // $newdiv.css("background-color", 'white')
      // $newdiv.css("")

      console.log(data);
      //$("#episode").text(data)
      const $newmodal = $("<div>").text(data.img).appendTo($newdiv);
      const $newimg = $('<img>').appendTo($('.photo'));
      $($newimg).attr('src', data.image);
      console.log(data.image);
      const $readingName = $('<div>').text(data.name).addClass('.modal-name').prependTo($('.photo'))
      const $episode = $('<li>').text(data.episode).appendTo($('.photo'))
      //  const $episode = $('<div>').text(data.episode[horoscope]).appendTO($readingName);




    });
  });
});