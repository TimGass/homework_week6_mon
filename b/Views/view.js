App.Post.View = Backbone.View.extend({
  initialize: function(){
    $("#submit").on("click", this.post);
  },

  post: function(event){
    event.preventDefault();
    var first = $("#first").val();
    var last = $("#last").val();
    var address = $("#address").val();
    var number = $("#number").val();
    var collection = new App.Post.Collection();
    if(first.trim() && last.trim() && address.trim() && !isNaN(Number(number.replace(/[)(-]/g, "")))){
    collection.create({"first":first, "last": last, "address": address, "number": number});
    }
    else{
      alert("Enter valid credentials!");
    }
  }
});

App.view = new App.Post.View();
