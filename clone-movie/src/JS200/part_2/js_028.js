function Js_028() {
  let family = {
    addresss: "Seoul",
    members: {},
    addFamily: function (age, name, role) {
      this.members[role] = {
        age: age,
        name: name,
      };
    },
    getHeadcount: function () {
      return Object.keys(this.members).length;
    },
  };

  family.addFamily(30, "chan", "aunt");
  family.addFamily(3, "yu", "niece");
  family.addFamily(10, "daa", "dog");
  console.log(family.getHeadcount());
  console.log(family);
  return <div></div>;
}
export default Js_028;
