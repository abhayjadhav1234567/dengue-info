/* Global */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #d62828;
}
section {
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
}

/* Hero */
.hero {
  position: relative;
  height: 100vh;
  background: url("https://img.freepik.com/free-vector/mosquito-background-with-realistic-style_23-2147879710.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero .overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
}
.hero-content {
  position: relative;
  color: #fff;
  z-index: 2;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}
.hero p {
  font-size: 1.3rem;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background: #e63946;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  transition: background 0.3s;
}
.btn:hover {
  background: #a4161a;
}

/* Navigation */
nav {
  display: flex;
  justify-content: center;
  background: #b51717;
  flex-wrap: wrap;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 12px 18px;
  font-weight: bold;
  transition: transform 0.3s ease;
}
nav a:hover {
  transform: scale(1.1);
  background: #720c0c;
  border-radius: 5px;
}

/* Cards */
.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
  width: 250px;
  transition: transform 0.4s;
}
.card:hover {
  transform: rotateY(10deg) scale(1.05);
}
.card i {
  font-size: 40px;
  color: #e63946;
  margin-bottom: 15px;
}

/* Chart */
#chart3d {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}

/* Footer */
footer {
  text-align: center;
  background: #e63946;
  color: white;
  padding: 20px;
}

