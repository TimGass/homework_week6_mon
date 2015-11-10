App.Post.View = Backbone.View.extend({
  initialize:function(){
    $("#submit").on("click", this.post);
  },

  post: function(event){
    event.preventDefault();
    var post = $("#text").val();
    var title = $("#title").val();
    var postModel = new App.Post.Model();
    postModel.save({"title": title, "post": post});
    console.log(post);
  }
});

App.view = new App.Post.View();
