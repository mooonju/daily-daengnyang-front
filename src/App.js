import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12"></div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <h3> 로그인ㅇㅇ </h3>
        </div>
        <div class="col-md-4">
          <form class="login-form form-group">
            <div class="form-group">
              <label for="userName">
                아이디
              </label>
              <input type="text"  class="form-control"
                     placeholder="아이디를 입력하세요" />
            </div>

            <label for="password">
              비밀번호
            </label>
            <input type="password" class="form-control"
                   placeholder="비밀번호를 입력하세요" />
          
            <button type="button" class="btn btn-primary" onclick="login()">
              로그인
            </button>
          </form>


          <button type="button" class="btn btn-secondary">
            회원 가입
          </button>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
