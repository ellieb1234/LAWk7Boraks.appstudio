/*
query=""
req={}
results=[]
netid="elb22116"
pw="cozmox-5jibsI-sethyg"

inptDelete = function() {
  let companyNameDel = inptNameDel.value
  let found = false
  for (i = 0; i < results.length; i++) {
    if (companyNameDel == results[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblDelete.textContent = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = '" + companyNameDel + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=elb22116&query=" + query)
    if (req.status == 200) //transit worked.{
      if (req.responseText == 500)
        lblDelete.textContent = `You have successfully deleted the pet named ${petNameDel}`
      else
        lblDelete.textContent = `There was a problem deleting ${petNameDel} from the database.`
    }else
      lblDelete.textContent = `Error: ${req.status}`
  }
}

txtaCustomersDelete.onshow = function() {
  query = "SELECT name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=elb22116&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are: \n ${results}`)
    if (results.length == 0)
      lblDelete.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtaCustomersDelete.value = message
    } // end else

  } else // the transit didn't work - bad wifi? server turned off?
    txtaCustomers.value = "Error code: " + req.status
}
*/