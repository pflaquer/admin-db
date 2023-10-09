function form(){
const api = 'https://nodejs-db-app.onrender.com/api/items'
return (`

<form action="${api}" method="post">
  <label for="fname">Title</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Description</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="pname">Price</label>
  <input type="number" id="pname" name="pname"><br><br>
  <label for="imgname">Images</label>
  <input type="file" id="imgname" name="imgname" accept="image/png, image/jpeg" multiple />
  <br><br>
  <input type="submit" value="Submit">
</form>

`)
}

export default form
