export function Form1()
{
    return (
        <form>
            <label htmlFor="name">Cafe Name Idea</label>
            <input type="text" id="name"/>
            <br/>
            <label htmlFor="theme">Theme?</label>
            <input type="text" id="theme"/>
            <br/><br/>
            What should I add to the menu?
            <br/>
            <input type="checkbox" id="sandwich"/>
            <label htmlFor="sandwich">Sandwiches</label>
            <br/>
            <input type="checkbox" id="pastry"/>
            <label htmlFor="pastry">Pastries</label>
            <br/>
            <input type="checkbox" id="tea"/>
            <label htmlFor="tea">Tea</label>
            <br/><br/>

            What days should it be open?
            <br/>
            <input type="radio" id="weekdays" name="hours" value="WEEKDAYS"/>
            <label htmlFor="weekdays">Weekdays</label><br/>
            <input type="radio" id="weekends" name="hours" value="WEEKENDS"/>
            <label htmlFor="weekends">Weekends</label><br/>
            <input type="radio" id="both" name="hours" value="BOTH"/>
            <label htmlFor="both">Both</label>
            <br/><br/>

            <label htmlFor="role">What's your role at WPI?:</label>
            <select name="role" id="role">
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="facilities">Facilities</option>
                <option value="visitor">Visitor</option>
            </select>

            <br/><br/>
            <label htmlFor="comments">Comments:</label>
            <br/>
            <textarea rows={2} cols={40} id="comments"></textarea>
            <br/><br/>
            <input type="submit" value="Submit" id="submitButton"/>

        </form>
    )
}
