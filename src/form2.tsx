export function Form2(){
    return (
        <form>
            <label htmlFor= "fullname"> Enter your full name:</label>
            <input type = "text" id = "fullname" />
            <br />Favorite Genre(s):<br />
            <input type = "checkbox" id = "fiction" />
            <label htmlFor = "fiction"> Fiction</label>
            <br />
            <input type = "checkbox" id = "nonfiction" />
            <label htmlFor = "nonfiction"> Nonfiction</label>
            <br />
            <input type = "checkbox" id = "scifi" />
            <label htmlFor = "scifi"> Science Fiction</label>
            <br />
            <input type = "checkbox" id = "fantasy" />
            <label htmlFor = "fantasy">Fantasy</label>
            <br /><br />
            <label htmlFor = "favorite author">Favorite Author</label>
            <input type = "text" id = "favorite author" />
            <br /><br />
            <label htmlFor = "favorite book">Favorite Book</label>
            <input type = "text" id = "favorite book" />
            <br /><br />
            Do read often?
                <br />
                Yes
                <input type = "radio" name = "reader" />
                <br />
                Somewhat
                <input type = "radio" name = "reader" />
                <br />
                No
                <input type = "radio" name = "reader" />
                <br /><br />
            <label htmlFor="role">What do you cosider yourself?</label>
            <select name="role" id="role">
                <option value="Reader">Reader</option>
                <option value="Writer">Writer</option>
                <option value="NA">NA</option>
            </select>
            <br />
            <label htmlFor = "comments">Comments</label>
                <br />
            <textarea rows={2} cols={40} id = "comments"></textarea>
            <br />
            <input type = "submit" value = "Submit" id = "submitButton" />
        </form>
    )
}