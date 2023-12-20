class person {
  work() {}
}

class employee extends person {
  work() {
    console.log("انت عبد")
  }
}
class manager extends person {
  work() {
    console.log("انت مدير العبد")
  }
}

let saif = new employee()
let amjad = new manager()

amjad.work()
// تعدد اشكال الفنكشن الواحد

//What is abstraction in programming?
// Mean as a programmer I hide all the complex code and use the importance code to reduce complexity
