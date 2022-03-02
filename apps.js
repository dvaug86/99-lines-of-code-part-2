document.addEventListener("DOMContentLoaded", function () {

//create button
    var btn = document.createElement('button');
    var btnText = document.createTextNode('Sing!');
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    
    btn.addEventListener('click', sing);

    

   
    //An array of 5 of my friends
    var friends = ['JohnAllen', 'Collin', 'Cam', 'Matt', 'Mike'];


    //newNum = currentNum - 1;

    function sing() {
        for (i = 0; i < friends.length; i++) {
            var friendsDiv = document.createElement('div');
            friendsDiv.className = 'friends-div';
           
            var h3Element = document.createElement('h3');
            var h3Text = document.createTextNode(friends[i]);
            h3Element.appendChild(h3Text);
            friendsDiv.appendChild(h3Element);
            document.body.appendChild(friendsDiv);

            for (var num = 99; num >= 1; num--) {
                if (num > 2) {
                    var songLine = document.createElement('p');
                    var songText = document.createTextNode(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " clears it all out, " + (num - 1) + " lines of code in the file")
                    songLine.appendChild(songText);
                    friendsDiv.appendChild(songLine);
                
                } if (num === 2) {                    
                    songLine = document.createElement('p');
                    songText = document.createTextNode(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " clears it all out, 1 more line of code in the file");
                    songLine.appendChild(songText);
                    friendsDiv.appendChild(songLine);
              
                } if (num === 1) {                    
                    songLine = document.createElement('p');
                    songText = document.createTextNode(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " clears it all out, no more lines of code in the file");
                    songLine.appendChild(songText);
                    friendsDiv.appendChild(songLine);
                }

            }
        }
    }
});