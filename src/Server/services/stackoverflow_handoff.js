const User = require('../models/user');
const request = require('request');
const config = require('../config');

//MAIN MODULE THAT PULLS STACKOVERFLOW INFORMATION
module.exports = function(req, res, next){
  const user_id = req.params.id;
  const stackoverflow_userid = req.body.stackoverflow;

  request({
    method: 'GET',
    uri: `https://api.stackexchange.com/2.2/users/${stackoverflow_userid}/timeline?site=stackoverflow`,
    gzip: true
  }, function(error, response, body){
      let filtered_data = [];
      const data = JSON.parse(body).items;
      let counter = 0;//making sure the inner loop doesn't mismatch
      //with outer loop

      //ONLY PULLING ANSWERS AND QUESTIONS, NO OTHER DATA
      for(i=0; i < data.length; i++){
        if (data[i].post_id && data[i].creation_date >= Number(config.creation_timestamp)){
          filtered_data[counter] = {
            post_id: data[i].post_id,
            post_type: data[i].post_type,
            date: data[i].creation_date
          }
          counter++;
        }
      }
      //Counting initial points for user
      /*/10 FOR EVERY ANSWER, 2 FOR EVERY QUESTION */
      let points = 0;
      for (i=0; i < filtered_data.length; i++){
        if (filtered_data[i].post_type == "answer"){
          points += 10;
        }
        else if (filtered_data[i].post_type == "question"){
          points += 2;
        }
      }
      console.log(points);
      const updated = {
        username: stackoverflow_userid,
        data: filtered_data,
        actions: filtered_data.length,
        points: points
      }

      User.findByIdAndUpdate({_id: user_id}, {$set: {stackoverflow : updated}})
          .then(() => User.findById({_id: user_id}))
          .then( user => res.send(user.stackoverflow))
          .catch(next);
  });


}
