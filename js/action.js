$('#randomizer').on('click', function(){
    $("img[id^='member-']").removeClass('img-choosen');
    var countDown = Math.ceil((Math.random() * 10) + 10), choosen = 1;
    console.log('countdown adalah = ' + countDown)
    var totalMember = team.length;
    
    // this is choosing Classes
    choosingClass = function(id){
        $('#member-' + id).addClass('img-choosen');
        setTimeout(function() {
            $('#member-' + id).removeClass('img-choosen');
        }, 500);
    }

    choosenClass = function(id){
        $('#member-' + id).addClass('img-choosen');
    }

    choosing = setInterval(function(){
        if(choosen > totalMember) choosen = 1;
        if(countDown > 0){
            choosingClass(choosen);
            countDown--;
            choosen ++;
            console.log(choosen)
        }else{
            choosenClass(choosen);
            console.log('you are choosen');
            clearInterval(choosing);
        }
    }, 500, choosen, totalMember, countDown)

})


$('#myModal.portfolio-modal').on('shown.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var id = button.data('id');
  var data = portofolio[id];
  var modal = $(this);
  modal.find('#portofolio-name').text(data.name);
  modal.find('#portofolio-intro').text(data.introText);
  modal.find('#portofolio-image').attr('src', data.image);
  modal.find('#portofolio-content').text(data.contentText);
})

// newsbox
// $(function () {
//     $(".demo1").bootstrapNews({
//         newsPerPage: 5,
//         autoplay: true,
//         pauseOnHover:true,
//         direction: 'up',
//         newsTickerInterval: 4000,
//         onToDo: function () {
//             //console.log(this);
//         }
//     });
    
//     $(".demo2").bootstrapNews({
//         newsPerPage: 4,
//         autoplay: true,
//         pauseOnHover: true,
//         navigation: false,
//         direction: 'down',
//         newsTickerInterval: 2500,
//         onToDo: function () {
//             //console.log(this);
//         }
//     });

//     $("#demo3").bootstrapNews({
//         newsPerPage: 3,
//         autoplay: false,
        
//         onToDo: function () {
//             //console.log(this);
//         }
//     });
// });