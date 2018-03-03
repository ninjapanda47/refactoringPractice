
/* STUDENT APPLICATION */
//model

const model = {
  studentName: [
    {
      id: 1,
      name: "Slappy the Frog",
      checkbox: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0
    },
    {
      id: 2,
      name: "Lilly the Lizard",
      checkbox: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0
    },
    {
      id: 3,
      name: "Paulrus the Walrus",
      checkbox: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0
    },
    {
      id: 4,
      name: "Gregory the Goat",
      checkbox: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0
    },
    {
      id: 5,
      name: "Adam the Anaconda",
      checkbox: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0
    }
  ]
};

//controller
const controller = {
  init: function() {
    setUpView.init();
  },

  getStudent: function() {
    return model.studentName;
  },

  updateCount: function(id, count) {
    let index = model.studentName.findIndex(s => s.id === id);
    console.log(index);
    model.studentName[index].count = count;
    setUpView.updateCount();
  }
};

//view
const setUpView = {
  init: function() {
    this.render();
  },

  render: function() {
    let students = controller.getStudent();

    const setUp = students.map(student => {
      $("#list").append(
        `<tr class='student' id='${student.id}'>
                <td class='name-col'>${student.name}</td>                
                </tr>`
      );
    });
    const setCheck = students.map(s => {
      s.checkbox.map((c, i) => {
        $(`#${s.id}`).append(
          `<td class='attend-col'><input type='checkbox' id='${
            s.id
          }-${i}'></td>`
        );
      });
    });

    $("input").click(function(e) {
      let parentId = parseInt(
        $(`#${e.target.id}`)
          .parent()
          .parent()[0].id
      );
      let count = $(`#${parentId} input:checked`).length;
      controller.updateCount(parentId, count);
    });
    const addCount = students.map((s, j) => {
      $(`#${s.id}`).append(
        `<td class='missed-col' id='${s.id}-count'>${s.count}</td>`
      );
    });
  },

  updateCount: function() {
    let students = controller.getStudent();
    const addCount = students.map((s, j) => {
      $(`#${s.id}-count`).html(`${s.count}`);
    });
  }
};

controller.init();
