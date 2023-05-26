function calculateCurrentGrade() {
    var assignmentCount = document.getElementsByClassName("assignment").length;

    var totalMaxPercentage = 0;
    var totalWeightedPercentage = 0;

    for (var i = 1; i <= assignmentCount; i++) {
        var assignmentGrade = parseFloat(document.getElementById("assignmentGrade" + i).value);
        var assignmentMaxGrade = parseFloat(document.getElementById("assignmentMaxGrade" + i).value);
        var assignmentPercentage = parseFloat(document.getElementById("assignmentPercentage" + i).value);

        var assignmentWeightedPercentage = (assignmentGrade / assignmentMaxGrade) * (assignmentPercentage / 100);
        totalMaxPercentage += assignmentPercentage;
        totalWeightedPercentage += assignmentWeightedPercentage;
    }

    var currentGrade = (totalWeightedPercentage / totalMaxPercentage) * 100;

    document.getElementById("currentGrade").textContent = "Current Grade: " + currentGrade.toFixed(2) + "%";

    document.getElementById("currentGradeResult").style.display = "block";
}

function calculateDesiredGrade() {
    var currentGrade = parseFloat(document.getElementById("currentGradeInput").value);
    var desiredGrade = parseFloat(document.getElementById("desiredGradeInput").value);
    var finalPercentage = parseFloat(document.getElementById("finalPercentageInput").value);

    var desiredGradeNeeded = (desiredGrade - (currentGrade * (1 - finalPercentage / 100))) / (finalPercentage / 100);

    document.getElementById("desiredGradeNeeded").textContent = "Grade needed on final: " + desiredGradeNeeded.toFixed(2) + "%";

    document.getElementById("desiredGradeResult").style.display = "block";
}
