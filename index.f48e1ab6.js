var e=function(e,t,n,i,o){var a=document.createElement("div");a.classList.add("notification",o),a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),a.style.boxSizing="content-box";var s=document.createElement("h2");s.textContent=n,s.classList.add("title"),a.append(s);var c=document.createElement("p");c.textContent=i,a.append(c),document.body.append(a),setTimeout(function(){a.remove()},2e3)};setTimeout(function(){e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success")},2e3),setTimeout(function(){e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error")},4e3),setTimeout(function(){e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning")},6e3);
//# sourceMappingURL=index.f48e1ab6.js.map
