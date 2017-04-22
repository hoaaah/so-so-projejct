var fillTeam = function(data, id){
    $('#member-display').append('<div class="col-sm-4"><div class="team-member"><img id="member-'+ (id + 1) +'" src="'+ data.photo +'" class="img-responsive img-circle" alt=""><h4>'+ data.name +'</h4><p class="text-muted">'+ data.role +'</p><ul class="list-inline social-buttons"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-facebook"></i></a></li><li><a href="#"><i class="fa fa-linkedin"></i></a></li></ul></div></div>');
}
team.forEach(fillTeam);

var fillPortofolio = function(data, id){
    $('#portofolio-display').append('<div class="col-md-4 col-sm-6 portfolio-item"><a href="#myModal" class="portfolio-link" data-toggle="modal" data-id="'+ id +'"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="'+ data.image +'" class="img-responsive" alt="'+ data.name +'"></a><div class="portfolio-caption"><h4>'+ data.name +'</h4><p class="text-muted">'+ data.category +'</p></div></div>');
}
portofolio.forEach(fillPortofolio);