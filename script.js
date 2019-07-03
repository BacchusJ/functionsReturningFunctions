//function returning functions

(function () {
    function interviewQuestion(job) {
        if (job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explaoin what UX design is?')
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?'); 
            };
    
        } else if (job === 'drag queen') {
            return function(name) {
                console.log(name + ' Who is your favorite artist to lipsync to?')
            };
        }
        
        else {
            return function(name) {
            console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
    
    var teacheerQuestion = interviewQuestion('teacher');
    teacheerQuestion('Bacchus');
    
    var designerQuestion = interviewQuestion('designer');
    designerQuestion('Justin');
    
    var dragqueenQuestion = interviewQuestion('drag queen');
    dragqueenQuestion('RuPaul');
    
    interviewQuestion('drag queen')('Kika');
    
}) ()


