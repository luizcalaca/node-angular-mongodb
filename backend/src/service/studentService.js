var studentModel = require('../model/studentModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {


   return new Promise(function myFn(resolve, reject) {

       var studentModelData = new studentModel();

       studentModelData.firstname = studentDetails.firstname;
       studentModelData.lastname = studentDetails.lastname;
       studentModelData.email = studentDetails.email;
       studentModelData.password = studentDetails.password;
       var encrypted = encryptor.encrypt(studentDetails.password);
       studentModelData.password = encrypted;

       studentModelData.save()
       .then(result => {
        resolve({status: true, msg: "Student created"});
       })
       .catch( erros => {
        reject({status: false, msg: "Invaild student"});
       })

   });

}

module.exports.loginuserDBService = (studentDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      studentModel.findOne({ email: studentDetails.email})
      .then(result => {
        if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);

               if(decrypted== studentDetails.password)
               {
                  resolve({status: true,msg: "Student Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "Student Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Student Error Detailssss"});
            }
      })
      .catch(e => {
        reject({status: false, msg: "Invaild Data"});
      })

      // ,function getresult(errorvalue, result)
      // {
      //    if(errorvalue)
      //    {
      //       reject({status: false, msg: "Invaild Data"});
      //    }
      //    else
      //    {
      //       if(result !=undefined &&  result !=null)
      //       {
      //          var decrypted = encryptor.decrypt(result.password);

      //          if(decrypted== studentDetails.password)
      //          {
      //             resolve({status: true,msg: "Student Validated Successfully"});
      //          }
      //          else
      //          {
      //             reject({status: false,msg: "Student Validated failed"});
      //          }
      //       }
      //       else
      //       {
      //          reject({status: false,msg: "Student Error Detailssss"});
      //       }

      //    }

      });
}
