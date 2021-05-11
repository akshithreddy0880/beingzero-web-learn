var API = "https://codeforces.com/api/" ;

$(document).ready(function()
{
    $("#form").show() ;
    $("#details").hide() ;
    $("#get").click(function()
    {
        var H = $("#handle").val() ;
        if(!H) 
        {
            alert("Enter a value") ;
            return ;
        }
        else 
        {
            $("#form").hide() ;
            $("#details").show() ;
            var api = API + "user.info?handles=" + H ;
            console.log(api) ;
            $.get(api, function(data, status)
            {
                var x = "<h1> Hello! " + H + "</h1>" ;
                document.getElementById("Greet").innerHTML = x ;
                api = API + "user.status?handle=" + H ;
                console.log(api) ;
                $.get(api, function(data, status)
                {
                    var verdicts = {} ;
                    var lang = {} ;
                    var crctsub = [] ;
                    var crct = 0 ;
                    for(var i = 0 ; i < data.result.length ; i++)
                    {
                        if(verdicts[data.result[i].verdict] === undefined)
                        verdicts[data.result[i].verdict] = 0 ;
                        verdicts[data.result[i].verdict]++ ;
                        var ok = "\"OK\"" ;
                        var ver = JSON.stringify(data.result[i].verdict) ;
                        if(ver == ok)
                        crctsub[crct++] = data.result[i].problem ;
                        if(lang[data.result[i].programmingLanguage] === undefined)
                        lang[data.result[i].programmingLanguage] = 0 ; 
                        lang[data.result[i].programmingLanguage]++ ;
                    }
                    x = "The Verdicts of " + H + "<br> &nbsp &nbsp";
                    x += "<table width = 25%>" ;
                    x += "<tr><th>Verdict</th><th>Count</th></tr>" ;
                    var inword = false, innum = false ;
                    var ver = "" ;
                    var cnt = "" ;
                    var JSN = JSON.stringify(verdicts);
                    for(var i = 0 ; i < JSN.length ; i++)
                    {
                        if(JSN[i] == "\"")
                        {
                            if(!inword)
                            x += "<tr>" ; 
                            inword ^= true ;
                            if(ver != "")
                            {
                                x += "<td class = \"bor\" >" + ver + "</td>" ;
                                ver = "" ;
                            }
                        }
                        else if(JSN[i] == ":") innum = true ;
                        else if(JSN[i] == "," || JSN[i] == "}")
                        {
                            innum = false ;
                            x += "<td class = \"bor\" >" + cnt + "</td></tr>" ;
                            cnt = "" ;
                        }
                        else if(innum) cnt += JSN[i] ;
                        else if(inword) ver += JSN[i] ;
                    }
                    x += "</table>" ;
                    document.getElementById("ver").innerHTML = x ;
                    x = "" ;

                    x = "The Languages of " + H + "<br> &nbsp &nbsp";
                    x += "<table width = 25%>" ;
                    x += "<tr><th>Language</th><th>Count</th></tr>" ;
                    var inword = false, innum = false ;
                    var ver = "" ;
                    var cnt = "" ;
                    var JSN = JSON.stringify(lang);
                    for(var i = 0 ; i < JSN.length ; i++)
                    {
                        if(JSN[i] == "\"")
                        {
                            if(!inword)
                            x += "<tr>" ; 
                            inword ^= true ;
                            if(ver != "")
                            {
                                x += "<td class = \"bor\" >" + ver + "</td>" ;
                                ver = "" ;
                            }
                        }
                        else if(JSN[i] == ":") innum = true ;
                        else if(JSN[i] == "," || JSN[i] == "}")
                        {
                            innum = false ;
                            x += "<td class = \"bor\" >" + cnt + "</td></tr>" ;
                            cnt = "" ;
                        }
                        else if(innum) cnt += JSN[i] ;
                        else if(inword) ver += JSN[i] ;
                    }
                    x += "</table>" ;
                    document.getElementById("lan").innerHTML = x ;
                    x = "" ;
                    x = "The correct Submissions are : <br>" ;
                    x += "<table width = 100%>" ;
                    x += "<tr><th> Problem Name </th><th>Problem link</th><th>Rating</th></tr>" ;
                    for(var i = 0 ; i < crctsub.length ; i++)
                    {
                        x += "<tr><td>" ;
                        x += JSON.stringify(crctsub[i].name) ;
                        x += "</td><td>"
                        x += "<a href=\"" ;
                        x += "https://www.codeforces.com/contest/" + JSON.stringify(crctsub[i].contestId) + "/problem/" ;
                        var ind =  JSON.stringify(crctsub[i].index) ;
                        for(var j = 1 ; j < ind.length - 1 ; j++)
                        x += ind[j] ;
                        x += "\"> LINK </a>" ;
                        x += "</td><td>" ;
                        x += JSON.stringify(crctsub[i].rating) ;
                        x += "</td></tr>" ;
                    }
                    x += "</table>" ;
                    console.log(x) ;
                    document.getElementById("crct").innerHTML = x ;
                    x = "" ;
                }).fail(function(xhr, status)
                {
                    alert("Error Ocuured!!") ;
                    $("#form").show() ;
                    $("#details").hide() ;
                    return ;
                }) ;
                api = "https://codeforces.com/api/user.rating?handle=" + H ;
                console.log(api) ;
                $.get(api, function(data, status)
                {
                    x = "" ;
                    x = "The contest of " + H + "<br> &nbsp &nbsp " ;
                    x += "<table width = 100%>" ;
                    x += "<tr><th>Contest ID</th><th>Contest Name</th><th>Rank</th></tr>" ;
                    for(var i = 0 ; i < data.result.length ; i++)
                    {
                        x += "<tr>" ;
                        x += "<td>" ;
                        var JSN = JSON.stringify(data.result[i]) ;
                        for(var j = 13 ; JSN[j] != "," ; j++)
                        x += JSN[j] ;
                        x += "</td><td>" ;
                        var ind = 1 ;
                        for(var j = 33 ; JSN[j] != '\"' ; j++)
                        {
                            ind = j ;
                            x += JSN[j] ; 
                        }
                        x += "</td>" ;
                        ind += 13 ;
                        var ind2 = 1;
                        for(var j = ind ; JSN[j] != '\"' ; j++)
                        {
                            ind2 = j ;
                        }
                        ind2 += 10 ;
                        ind = ind2 ;
                        x += "<td>" ;
                        for(var j = ind ; JSN[j] != "," ; j++)
                        x += JSN[j] ;
                        x += "</td>" ;
                        x += "</tr>" ;
                    }
                    x += "</table>" ;
                    document.getElementById("con").innerHTML = x ;
                    x = "" ;
                })
            }).fail(function(xhr, status)
            {
                alert("User Not Found!!") ;
                $("#form").show() ;
                $("#details").hide() ;
                return ;
            }) ;
        }
    });
}) ;