const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>One More: Fitness Club</h1>
        <p>
        The secret of getting ahead is getting started
        </p>
      </div>
      <div className="contain">
      <h1>Register Yourself Now</h1>
        <form >
            <div class="form">
                <table class="table">
                    <tr>
                        <td>    Enter your name</td>
                        <td> <input type="text" class="label"/> </td>
                    </tr>
                    <tr>
                        <td>    Enter your  address</td>
                        <td> <input type="text" class="label"/> </td>
                    </tr>
                    <tr>
                        <td>    Enter cell number</td>
                        <td> <input type="number" class="label"/> </td>
                    </tr>
                    <tr>
                        <td>    Enter your email</td>
                        <td> <input type="email" class="label"/> </td>
                    </tr>
                    <tr>
                        <td>
                            gender
                        </td>
                        <td>
                            <input type="radio" name="gender" value="male"/><label for="male">male </label>
                            <input type="radio" name="gender" value="female"/><label for="female">female </label><br/>
                            <input type="radio" name="gender" value="other"/><label for="other">other</label>

                        </td>
                    </tr>
                </table>
                <button class="btn">submit</button>

            </div>
        </form>
    </div>
    </main>
  );
};

export default HeroSection;
