$(() => {


  $("input[type='submit']").on("click", (event) => {
    i = Math.floor(Math.random() * 671)
  });



  $("form").on("submit", (e) => {
    e.preventDefault();

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
      e.preventDefault();
      const $newdiv = $("<div>").text(data.name).appendTo($(".name"));
      console.log(data);
      //$("#episode").text(data)

      $(".modalcontent").attr("src", data.image);
      console.log(data.image);
    });
  });
});