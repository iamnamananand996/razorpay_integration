var course_prices_online = new Array();

    course_prices_online["Coding_in_Python"]=4000;
    course_prices_online["Introduction_to_R"]=4000;
    course_prices_online["Machine_Learning_Supervised_Learning_Approach"]=9000;
    course_prices_online["Machine_Learning_Unsupervised_Learning_Approach"]=9000;
    course_prices_online["Introduction_to_Data_Analytics_using_Python"]=7500;
    course_prices_online["Introduction_to_Data_Analytics_using_R"]=7500;
    course_prices_online["Introduction_to_Business_Analytics_and_Visualization_Techniques"]=7500;
    course_prices_online["HR_Analytics"]=7500;
    course_prices_online["Marketing_Analytics"]=7500;
    course_prices_online["Operations_Analytics"]=7500;
    course_prices_online["Financial_Analytics"]=7500;
    course_prices_online["Supply_Chain_Analytics"]=7500;
    course_prices_online["Introduction_to_Big_data"]=8000;
    course_prices_online["Big_Data_modelling_Data_Management_Systems"]=7500;
    course_prices_online["Big_Data_Integration_Processing"]=7500;
    course_prices_online["Machine_Learning_with_Big_Data"]=7500;
    course_prices_online["Deep_Learning_for_NLP"]=12000;
    course_prices_online["Deep_Learning_for_Computer_Vision"]=12000;
    course_prices_online["Machine_Learning_Production_Deployment_and_Introduction_to_Explainable_AI"]=8000;
    course_prices_online["Introduction_to_Blockchain"]=12000;
    course_prices_online["Dont_want"]=0;

var course_prices_online_offiline = new Array();

    course_prices_online_offiline["Coding_in_Python"]=6000;
    course_prices_online_offiline["Introduction_to_R"]=6000;
    course_prices_online_offiline["Machine_Learning_Supervised_Learning_Approach"]=11000;
    course_prices_online_offiline["Machine_Learning_Unsupervised_Learning_Approach"]=11000;
    course_prices_online_offiline["Introduction_to_Data_Analytics_using_Python"]=9000;
    course_prices_online_offiline["Introduction_to_Data_Analytics_using_R"]=9000;
    course_prices_online_offiline["Introduction_to_Business_Analytics_and_Visualization_Techniques"]=9000;
    course_prices_online_offiline["HR_Analytics"]=9000;
    course_prices_online_offiline["Marketing_Analytics"]=9000;
    course_prices_online_offiline["Operations_Analytics"]=9000;
    course_prices_online_offiline["Financial_Analytics"]=9000;
    course_prices_online_offiline["Supply_Chain_Analytics"]=9000;
    course_prices_online_offiline["Introduction_to_Big_data"]=10000;
    course_prices_online_offiline["Big_Data_modelling_Data_Management_Systems"]=9000;
    course_prices_online_offiline["Big_Data_Integration_Processing"]=9000;
    course_prices_online_offiline["Machine_Learning_with_Big_Data"]=9000;
    course_prices_online_offiline["Deep_Learning_for_NLP"]=15000;
    course_prices_online_offiline["Deep_Learning_for_Computer_Vision"]=15000;
    course_prices_online_offiline["Machine_Learning_Production_Deployment_and_Introduction_to_Explainable_AI"]=10000;
    course_prices_online_offiline["Introduction_to_Blockchain"]=15000;
    course_prices_online_offiline["Dont_want"]=0;

    var course_prices_offline = new Array();

    course_prices_offline["Coding_in_Python"]=8000;
    course_prices_offline["Introduction_to_R"]=8000;
    course_prices_offline["Machine_Learning_Supervised_Learning_Approach"]=13500;
    course_prices_offline["Machine_Learning_Unsupervised_Learning_Approach"]=13500;
    course_prices_offline["Introduction_to_Data_Analytics_using_Python"]=13500;
    course_prices_offline["Introduction_to_Data_Analytics_using_R"]=11500;
    course_prices_offline["Introduction_to_Business_Analytics_and_Visualization_Techniques"]=11500;
    course_prices_offline["HR_Analytics"]=11500;
    course_prices_offline["Marketing_Analytics"]=11500;
    course_prices_offline["Operations_Analytics"]=11500;
    course_prices_offline["Financial_Analytics"]=11500;
    course_prices_offline["Supply_Chain_Analytics"]=11500;
    course_prices_offline["Introduction_to_Big_data"]=12000;
    course_prices_offline["Big_Data_modelling_Data_Management_Systems"]=11500;
    course_prices_offline["Big_Data_Integration_Processing"]=11500;
    course_prices_offline["Machine_Learning_with_Big_Data"]=11500;
    course_prices_offline["Deep_Learning_for_NLP"]=18000;
    course_prices_offline["Deep_Learning_for_Computer_Vision"]=18000;
    course_prices_offline["Machine_Learning_Production_Deployment_and_Introduction_to_Explainable_AI"]=12000;
    course_prices_offline["Introduction_to_Blockchain"]=18000;
    course_prices_offline["Dont_want"]=0;



// var totalPrice = 0;
document.getElementById("rzp-button").style.display = "none";
// $("#rzp-button1").hide();
firebase.initializeApp({
    apiKey: 'AIzaSyD5q9A-VTAknbDIu_ksQAsUbRw7Yv7fsks',
    authDomain: 'pucho-47574.firebaseapp.com',
    projectId: 'pucho-47574'
});

var db = firebase.firestore();



$(document).ready(function() {
    var rzp1; 
    $("button").click(function(){

        });
                
    });



// firebase seting
$(document).ready(function() {
    $("button").click(function(){
        var fname = $("input[name='fname']").val();
        if (fname == undefined) {
            console.log("fname");
            fname =='noData';
        }
        var lname = $("input[name='lname']").val();
        if (lname == undefined) {
            console.log('lname');
            lname =='noData';
        }
        var gender = $("input[name='Gender']:checked").val();
        if(gender == undefined){
            console.log('gender');
            gender = 'noData';
        }
        var institution = $("input[name='Institution']").val();
        if(gender == undefined){
            console.log('gender');
            gender = 'noData'
        }
        var degree = $("input[name='Degree']:checked").val();
        if(degree == undefined){
            console.log(degree);
            degree = 'noData';
        }
        var phone = $("input[name='phone']").val();
        if(phone == undefined){
            console.log('phone');
            phone = 'noData';
        }
        var email_placement_cell = $("input[name='email_placement_cell']").val();
        if(email_placement_cell == undefined){
            console.log('email_placemnet');
            email_placement_cell = 'noData';
        }
        var referrer_name = $("input[name='referrer_name']").val();
        if (referrer_name == undefined) {
            referrer_name  = 'noData';
        }
        var referrer_mobile = $("input[name='referrer_mobile']").val();
        if (referrer_mobile == undefined) {
            referrer_mobile = 'noData';
        }
        var referrer_email = $("input[name='referrer_email']").val();
        if (referrer_email == undefined) {
            referrer_email = 'noData';
        }
        var interest = $("input[name='interest']:checked").val();
        if (interest == undefined) {
            interest = 'noData';
        }
        var user_email = $("input[name='email']").val();
        if(user_email == undefined){
            console.log('user_email');
            user_email = 'noData'
        }
        var Java = $("input[name='Java']:checked").val();
        if (Java == undefined) {
            console.log('java');
            Java = 'noData';
        }
        var C_plus = $("input[name='C++']:checked").val();
        if (C_plus == undefined) {
            console.log('c++');
            C_plus = 'noData';
        }
        var Python = $("input[name='Python']:checked").val();
        if(Python == undefined){
            console.log('python');
            Python = 'noData';
        }
        var R = $("input[name='R']:checked").val();
        if (R == undefined) {
            console.log('R');
            R = 'noData';
        }
        var Linear_Algebra = $("input[name='Linear_Algebra']:checked").val();
        if(Linear_Algebra == undefined){
            Linear_Algebra = 'noData';
        }
        var Basic_probability_Statistics = $("input[name='Basic_probability_Statistics']:checked").val();
        if (Basic_probability_Statistics == undefined) {
            Basic_probability_Statistics = 'noData';
        }
        var College_Calculus = $("input[name='College_Calculus']:checked").val();
        if (College_Calculus == undefined) {
            College_Calculus = 'noData';
        }
        var Data_Analysis = $("input[name='Data_Analysis']:checked").val();
        if (Data_Analysis == undefined) {
            Data_Analysis = 'noData';
        }
        var ML = $("input[name='ML']:checked").val();
        if (ML == undefined) {
            ML = 'noData';
        }
        var Deep_Learning = $("input[name='Deep_Learning']:checked").val();
        if (Deep_Learning == undefined) {
            Deep_Learning = 'noData'
        }
        var ML_deployment_production = $("input[name='ML_deployment_production']:checked").val();
        if (ML_deployment_production == undefined) {
            ML_deployment_production = 'noData'
        }
        var Buisness_Analytics = $("input[name='Buisness_Analytics']:checked").val();
        if (Buisness_Analytics == undefined) {
            Buisness_Analytics = 'noData';
        }
        var Big_Data = $("input[name='Big_Data']:checked").val();
        if (Big_Data == undefined) {
            Big_Data = 'noData';
        }
        var Blockchain = $("input[name='Blockchain']:checked").val();
        if (Blockchain == undefined) {
            Blockchain = 'noData';
        }
        var NLP = $("input[name='NLP']:checked").val();
        if (NLP == undefined) {
            NLP = 'noData';
        }
        var Computer_Vision = $("input[name='Computer_Vision']:checked").val();
        if (Computer_Vision == undefined) {
            Computer_Vision = 'noData';
        }


        var career = [];
        $.each($("input[name='career']:checked"), function(){            
            career.push($(this).val());
        });

        if (career == undefined) {
            console.log('carrer');
            career = 'noData';
        }

        // console.log(career)


        var mode = $("input[name='mode']:checked").val();
        if (mode == undefined) {
            console.log('mode')
            mode = 'noData';
        }

        var places = [];
        $.each($("input[name='place']:checked"), function(){            
            places.push($(this).val());
        });
        if (places == undefined) {
            places = 'noData';
        }


        var courses = [];
        $.each($("input[name='is_name']:checked"), function(){            
            courses.push($(this).val());
        });
        if (courses == undefined) {
            console.log('cources');
            courses = 'noData';
        }

        var batch = $("input[name='batch']:checked").val();
        if (batch == undefined) {
            console.log('batch');
            batch = 'noData';
        }


        if (fname=='noData' || lname=='noData' || gender=='noData' || institution=='noData' || degree=='noData' ||
            phone=='noData'|| email_placement_cell=='noData' || user_email=='noData' || Java=='noData' || C_plus=='noData' ||
            Python=='noData'|| R=='noData' || career=='noData' || mode=='noData' || courses=='noData' || batch=='noData' 
        ) {

            alert('Required Filed are not Filled properly');
            
        }
        else{

       totalPrice = calprice();
        // alert("My favourite sports are: " + favorite.join(", "));
        $("#totalPriceData").text(totalPrice);
        $("#totalPriceData1").text("Total Price : Rs "+totalPrice);



//  Rajor pay implementation


        var options={ "key": "rzp_live_2Y0vFPKjcrrTIN", // Enter the Key ID generated from the Dashboard   
                    "amount": totalPrice*100, // INR 299.35    
                    "name": "Pucho",   
                    "handler": function (response){     
                        // alert("Your Order Id : "+response.razorpay_payment_id);
                        console.log('Your Order Id'+response.razorpay_payment_id);
                        db.collection("users").add({
                            fname: fname,
                            lname: lname,
                            gender : gender ,
                            institution : institution ,
                            degree : degree,
                            phone : phone,
                            email_placement_cell : email_placement_cell,
                            referrer_name : referrer_name,
                            referrer_mobile : referrer_mobile,
                            referrer_email : referrer_email,
                            interest : interest,
                            user_email : user_email,
                            Java : Java,
                            C_plus : C_plus,
                            Python : Python,
                            R : R,
                            Linear_Algebra : Linear_Algebra,
                            Basic_probability_Statistics : Basic_probability_Statistics,
                            College_Calculus : College_Calculus,
                            Data_Analysis : Data_Analysis,
                            ML : ML,
                            Deep_Learning : Deep_Learning,
                            ML_deployment_production : ML_deployment_production,
                            Buisness_Analytics : Buisness_Analytics,
                            Big_Data : Big_Data,
                            Blockchain : Blockchain,
                            NLP :NLP,
                            Computer_Vision : Computer_Vision,
                            career : career,
                            mode : mode,
                            places : places,
                            courses : courses,
                            batch : batch
                        })
                        .then(function() {
                            console.log("Document written with ID: ");
                            location.replace("registration_done.html")
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
                        // location.replace("registration_done.html")  
                    },    
                    "prefill": {"name": "Gaurav Kumar","email": "gaurav.kumar@example.com"},
                    "notes": {"address": "note value"},
                    "theme": {"color": "#F37254"}
                };
                rzp1 = new Razorpay(options);
                $("#rzp-button").show();
                document.getElementById('rzp-button').onclick = function(e){
                    rzp1.open(); 
                    e.preventDefault();
                }
    }
    });

});
function calprice(){
    document.getElementById("rzp-button").style.display = "none";
    var favorite = [];
    var totalPrice = 0;
    var mode = $("input[name='mode']:checked").val();
    if(mode == 'Offline'){
        $.each($("input[name='is_name']:checked"), function(){            
            favorite.push(course_prices_offline[$(this).val()]);
        });
    }
    else if(mode == 'Offline_Online'){
        $.each($("input[name='is_name']:checked"), function(){            
            favorite.push(course_prices_online_offiline[$(this).val()]);
        });
    }
    else{
        $.each($("input[name='is_name']:checked"), function(){            
            favorite.push(course_prices_online[$(this).val()]);
        });
    }
    for(i=0;i<favorite.length;i++){
        totalPrice = totalPrice + favorite[i];
    }
    // console.log(totalPrice)
    var gender = $("input[name='Gender']:checked").val();
    if (gender == 'female') {
        totalPrice = totalPrice * .9;
    } else {
        totalPrice = totalPrice;
    }

    return totalPrice;
}


