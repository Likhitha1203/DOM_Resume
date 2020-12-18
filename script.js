//creating header content

            var head = document.createElement("header")
            head.classList.add("my_pic_background");
            
            var section = document.createElement("section");

            var image = document.createElement("IMG");
            image.setAttribute("src","Profile.jpg");
            image.setAttribute("alt","Likhitha Ryali");

            var gray_line = document.createElement("div");
            gray_line.classList.add("absolute");

            var Name = document.createElement("h1");
            Name.setAttribute("class","name");
            Name.innerText = 'Likhitha Ryali';

            section.append(image,gray_line,Name);

            head.append(section);

//end of the header content

            var brk = document.createElement("br");

// giving details of the person

            var address = document.createElement("div");
            address. setAttribute("style", "text-align : center;");
            address.innerText = 'Vijayawada, Andhra Pradesh, India | +91 7306020050 | likhitha.ryali@gmail.com'

            var hr_line = document.createElement("hr");
            hr_line.setAttribute("style","background-color: black;");

//giving margin to the main content

            var margin = document.createElement("div");
            margin.setAttribute("style","margin: 25px;");

//dividing the body to half

            var content = document.createElement("div");
            content.classList.add("row");

//column1 

            var column1 = document.createElement("div");
            column1.classList.add("column");

//column1 inside style

            var style1 = document.createElement("div");
            style1.setAttribute("style", "padding-right: 10%;");

//column1 content starts

            var profile = document.createElement("h2");

            profile.innerHTML = '<i class="fas fa-user-alt"></i>&nbsp;Profile';
          
            var objective = document.createElement("div");
            objective.innerText = 'Innovative optimized solution seeker. Excited to be ar the development phase of my new career as a web developer. I am ambitious, adventuruous, assiduous, animated, and an literation advocate.';

            var skills = document.createElement("h2");

            skills.innerHTML = '<i class="fas fa-flask"></i>&nbsp;Technical Skills';

//table1 starts

            var Technical_Skills = document.createElement("table");

            var table_body1 = document.createElement("tbody");

            var row1 = document.createElement("tr");

            var data1_1 = document.createElement("td");
            data1_1.innerHTML = '<i class="fab fa-html5"></i>&nbsp;HTML5';

            var data1_2 = document.createElement("td");

            var progress1 = document.createElement("progress");
            progress1.setAttribute("min" , "0");
            progress1.setAttribute("max" , "100");
            progress1.setAttribute("value" , "50");

            var row2 = document.createElement("tr");

            var data2_1 = document.createElement("td");
            data2_1.innerHTML = '<i class="fab fa-css3-alt"></i>&nbsp;CSS3'

            var data2_2 = document.createElement("td");

            var progress2 = document.createElement("progress");
            progress2.setAttribute("min" , "0");
            progress2.setAttribute("max" , "100");
            progress2.setAttribute("value" , "50");

            var row3 = document.createElement("tr");

            var data3_1 = document.createElement("td");
            data3_1.innerHTML = '<i class="fab fa-js"></i>&nbsp;JavaScript'

            var data3_2 = document.createElement("td");

            var progress3 = document.createElement("progress");
            progress3.setAttribute("min" , "0");
            progress3.setAttribute("max" , "100");
            progress3.setAttribute("value" , "50");

            var row4 = document.createElement("tr");

            var data4_1 = document.createElement("td");
            data4_1.innerHTML = '<i class="fas fa-copyright"></i>&nbsp;C-Language'

            var data4_2 = document.createElement("td");

            var progress4 = document.createElement("progress");
            progress4.setAttribute("min" , "0");
            progress4.setAttribute("max" , "100");
            progress4.setAttribute("value" , "50");

            var row5 = document.createElement("tr");

            var data5_1 = document.createElement("td");
            data5_1.innerHTML = '<i class="fab fa-microsoft"></i>&nbsp;MS-Office';

            var data5_2 = document.createElement("td");

            var progress5 = document.createElement("progress");
            progress5.setAttribute("min" , "0");
            progress5.setAttribute("max" , "100");
            progress5.setAttribute("value" , "50");

            data1_2.append(progress1);

            row1.append(data1_1,data1_2);

            data2_2.append(progress2);

            row2.append(data2_1,data2_2);

            data3_2.append(progress3);

            row3.append(data3_1,data3_2);

            data4_2.append(progress4);

            row4.append(data4_1,data4_2);

            data5_2.append(progress5);

            row5.append(data5_1,data5_2);

            table_body1.append(row1,row2,row3,row4,row5);

            Technical_Skills.append(table_body1);

//table1 ends here

            var education = document.createElement("h2");
            education.innerHTML = '<i class="fas fa-graduation-cap"></i>&nbsp;Educational Qualifications';

//table2 starts
            var qualifications = document.createElement("table");
            qualifications.setAttribute("style","font-size: smaller;");

//tbale head part

            var q_head = document.createElement("thead");

            var h_row1 = document.createElement("tr");

            var h_head1 = document.createElement("th");
            h_head1.innerHTML = '<b>Qualification</b>';

            var h_head2 = document.createElement("th");
            h_head2.innerHTML = '<b>Group</b>';

            var h_head3 = document.createElement("th");
            h_head3.innerHTML = '<b>School/College Name</b>';

            var h_head4 = document.createElement("th");
            h_head4.innerHTML = '<b>Percentage/CGPA</b>';

            var h_head5 = document.createElement("th");
            h_head5.innerHTML = '<b>Year of Passing</b>';

            h_row1.append(h_head1,h_head2,h_head3,h_head4,h_head5);

            q_head.append(h_row1);

//table head part ends

//table body starts

            var q_body = document.createElement("tbody");

            var b_row1 = document.createElement("tr");

            var b_data1_1 = document.createElement("td");
            b_data1_1.setAttribute("style","text-align: center;");
            b_data1_1.innerText = 'B.Tech';

            var b_data1_2 = document.createElement("td");
            b_data1_2.setAttribute("style","text-align: center;");
            b_data1_2.innerText = 'EEE';

            var b_data1_3 = document.createElement("td");
            b_data1_3.setAttribute("style","text-align: center;");
            b_data1_3.innerText = 'PSCMR';

            var b_data1_4 = document.createElement("td");
            b_data1_4.setAttribute("style","text-align: center;");
            b_data1_4.innerText = '79.8%';

            var b_data1_5 = document.createElement("td");
            b_data1_5.setAttribute("style","text-align: center;");
            b_data1_5.innerText = '2018';

            var b_row2 = document.createElement("tr");

            var b_data2_1 = document.createElement("td");
            b_data2_1.setAttribute("style","text-align: center;");
            b_data2_1.innerText = 'XII';

            var b_data2_2 = document.createElement("td");
            b_data2_2.setAttribute("style","text-align: center;");
            b_data2_2.innerText = 'MPC';

            var b_data2_3 = document.createElement("td");
            b_data2_3.setAttribute("style","text-align: center;");
            b_data2_3.innerText = 'Sri Chaitanya Jr College';

            var b_data2_4 = document.createElement("td");
            b_data2_4.setAttribute("style","text-align: center;");
            b_data2_4.innerText = '90.8%';

            var b_data2_5 = document.createElement("td");
            b_data2_5.setAttribute("style","text-align: center;");
            b_data2_5.innerText = '2014';

            var b_row3 = document.createElement("tr");

            var b_data3_1 = document.createElement("td");
            b_data3_1.setAttribute("style","text-align: center;");
            b_data3_1.innerText = 'X';

            var b_data3_2 = document.createElement("td");
            b_data3_2.setAttribute("style","text-align: center;");
            b_data3_2.innerText = '---';

            var b_data3_3 = document.createElement("td");
            b_data3_3.setAttribute("style","text-align: center;");
            b_data3_3.innerText = 'Gowthama English Medium School';

            var b_data3_4 = document.createElement("td");
            b_data3_4.setAttribute("style","text-align: center;");
            b_data3_4.innerText = '8.5 CGPA';

            var b_data3_5 = document.createElement("td");
            b_data3_5.setAttribute("style","text-align: center;");
            b_data3_5.innerText = '2012';

            b_row1.append(b_data1_1,b_data1_2,b_data1_3,b_data1_4,b_data1_5);

            b_row2.append(b_data2_1,b_data2_2,b_data2_3,b_data2_4,b_data2_5);

            b_row3.append(b_data3_1,b_data3_2,b_data3_3,b_data3_4,b_data3_5);

            q_body.append(b_row1,b_row2,b_row3);

//table body ends here

            qualifications.append(q_head,q_body);

//table2 ends here

            var projects = document.createElement("div");

            var Projects_heading = document.createElement("h2");
            Projects_heading.innerHTML = '<i class="fas fa-project-diagram"></i>&nbsp;Projects';

            var un_list1 = document.createElement("ul");
            un_list1.type = 'nude';

            var list1 = document.createElement("li");
            list1.innerHTML = '<li><b><u>Main Project</u></b><br>Design and Analysis of Z-Source Inductor Base Circuit Breaker for D.C. Applications';

            un_list1.append(list1);

            projects.append(Projects_heading,un_list1);
            
            style1.append(profile,objective,skills,Technical_Skills,education,qualifications,projects);

            column1.append(style1);

//column1 ends here

//column2 starts here

            var column2 = document.createElement("div");
            column2.classList.add("column");

            var vr_line = document.createElement("div");
            vr_line.classList.add("verticalline");

            var style2 = document.createElement("div");
            style2.setAttribute("style","padding-left: 10%;");

            var un_list2 = document.createElement("ul");
            un_list1.type = 'nude';

            var list2 = document.createElement("li");
            list2.innerHTML = '<li><b><u>Mini Project</u></b><br>';

            var or_list = document.createElement("ol");
            or_list.type = 'a';

            var o_list1 = document.createElement("li");
            o_list1.innerText = 'Mobile charger * Street light using solar energy';

            var o_list2 = document.createElement("li");
            o_list2.innerText = 'Street lights using simulation software (MATLAB)';

            or_list.append(o_list1,o_list2);

            list2.append(or_list);

            un_list2.append(list2);

            var certification = document.createElement("h2");
            certification.innerHTML = '<i class="fas fa-certificate"></i>&nbsp;Academic Participations & Workshops Attended';

            var div = document.createElement("div");

            var un_list3 = document.createElement("ul");
            un_list3.type = 'nude';

            var list3_1 = document.createElement("li");
            list3_1.innerText = 'Poster presentation on Kite Generator at SRK College of Engineering & Technology.';

            var list3_2 = document.createElement("li");
            list3_2.innerText = 'Poster presentation on Save Energy at PSCMR College of Engineering & Technology.';

            var list3_3 = document.createElement("li");
            list3_3.innerText = 'Participated in Tech. quiz competition at PSCMR College of Engineering & Tech.';

            var list3_4 = document.createElement("li");
            list3_4.innerText = 'Did Internship at BHEL, Visakhapatnam';

            var list3_5 = document.createElement("li");
            list3_5.innerText = 'Solar workshop at JNTU, Kakinada';

            var list3_6 = document.createElement("li");
            list3_6.innerText = 'PLC & SCADA workshop at PSCMR College of Engineering and Technology';

            var list3_7 = document.createElement("li");
            list3_7.innerText = 'SCILAB workshop at PSCMR College of Engineering and Technology';

            var list3_8 = document.createElement("li");
            list3_8.innerText = 'PCB Designing workshop at PSCMR College of Engineering and Technology';

            un_list3.append(list3_1,list3_2,list3_3,list3_4,list3_5,list3_6,list3_7,list3_8);

            div.append(un_list3);

            var links = document.createElement("h2");
            links.innerHTML = '<i class="fas fa-share-alt"></i>&nbsp;Connecting Links';

            var netlify = document.createElement("a");
            netlify.innerHTML = '<a href = "https://app.netlify.com/teams/likhitha1203/overview">Netlify</a>&nbsp;';

            var linkedin = document.createElement("a");
            linkedin.innerHTML = '<a href = "https://www.linkedin.com/in/likhitha-ryali-a02b87124/">Linkedin</a>&nbsp;';           

            var github = document.createElement("a");
            github.innerHTML = '<i class="fab fa-github"></i>&nbsp;<a href = "https://github.com/Likhitha1203">Github</a>&nbsp;';
            
            var facebook = document.createElement("a");
            facebook.innerHTML = '<i class="fab fa-facebook"></i>&nbsp;<a href = "https://www.facebook.com/likhitha.ryali">FaceBook</a>&nbsp;';

            var twitter = document.createElement("a");
            twitter.innerHTML = '<i class="fab fa-twitter-square"></i>&nbsp;<a href = "https://twitter.com/LikhithaRyali12">Twitter</a>&nbsp;';
            

            var instagram = document.createElement("a");
            instagram.innerHTML = '<i class="fab fa-instagram-square"></i>&nbsp;<a href = "https://www.instagram.com/ryalilikhitha/">Instagram</a>';

            style2.append(un_list2,certification,div,links,netlify,linkedin,github,facebook,twitter,instagram)

            column2.append(vr_line,style2);

//column2 ends here

            content.append(column1,column2);

            margin.append(content);

            document.body.append(head,brk,address,hr_line,margin);