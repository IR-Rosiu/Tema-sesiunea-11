const all = {
  Activity: [
    "General",
    "Third Party Collaboration",
    "Reporting",
    "Projects",
    "Annual Updates",
    "Rebalancing",
    "Corporate Actions",
    "Research related activities",
    "Others",
  ],
  generalSA: [
    "Meetings",
    "Coaching & mentoring",
    "Capacity buidling internal",
    "Capacity buidling external",
    "HR related work",
    "Handling e-mails and calls",
  ],
  TPCSA: ["Client calls", "Issuer calls", "Query management"],
  ReportingSA: ["Daily reporting", "Weekly reporting", "Monthly reporting"],
  ProjectsSA: [
    "Methodology and SOP updates",
    "ADA",
    "BMR-SFDR",
    "QIP#3",
    "Internal projects",
  ],
  AnnualUpdatesSA: ["Screening", "Research", "Review"],
  CorporateActionsSA: ["Screening", "Research", "Review"],
  RebalancingSA: ["Screening", "Research", "Review"],
  RRASA: [
    "Batch creation",
    "Job creation",
    "Crawler",
    "Planning",
    "QA",
    "Tricky Cases",
    "Issuer Feedback",
  ],
  OthersSA: ["Support Other Teams"],
  IndicatorsEthics: ["AT", "AB", "CO", "PP", "SC", "WH", "PE", "GM", "FL"],
};

// BUTTONS AND ELEMENTS

const addButton = document.querySelector(".add_button button");
// console.log(activityList);

// ADD NEW ROW
let iRow = 0;
let iActivity = 0;
let iSubActivity = 0;
let iEntireRow = 0;

const addRow = function () {
  console.log("Salutari din Egipt");

  const tableRow = ` <tr class="entry_row" id="entire_row__${iEntireRow++}">
              <td class="activity" id="row__${iRow++}">
                <select class="account_options table_col select_act" id="act_select__${iActivity++}">
                  
                </select>
              </td>

              <td class="subactivity" >
                <select class="account_options table_col select_SA" id="sub_activity_select__${iSubActivity++}">
                  
                </select>
              </td>

              <td class="activity_type">
                <select class="account_options table_col">
                  <option value="CO">Contraceptives</option>
                  <option value="AT">Animal Testing</option>
                  <option value="PE">Pesticides</option>
                  <option value="WM">Whale Meat</option>
                  <option value="FL">Fur and Leather</option>
                  <option value="AB">Abortions</option>
                  <option value="GM">GMO</option>
                </select>
              </td>

              <td class="quantity">
                <input type="text" readonly />
              </td>

              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>
              <td class="day"><input type="text"/></td>

              <td class="comment">
                <textarea
                  class="comment_textarea"
                  placeholder="Add a comment..."
                ></textarea>
              </td>

              <td class="action">
                <div class="action_btns">
                  <div class="save_btn">
                    <a href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                        /></svg
                    ></a>
                  </div>
                  <div class="delete_btn">
                    <a href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                        /></svg
                    ></a>
                  </div>
                </div>
              </td>
            </tr>`;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", tableRow);
};

const addActivityCol = function () {
  const selectActivity = document.querySelectorAll(".select_act");
  string2 = all.Activity.map(
    (activity, index) =>
      `<option value=${activity}>${index + 1}. ${activity}</option>`
  );
  selectActivity?.forEach(select => (select.innerHTML = string2));

  // SUBACTIVITY
  const selectSA = document.querySelectorAll(".select_SA");
  const ReportingSA = all.ReportingSA.map(
    SA => `<option value=${SA}>${SA}</option>`
  );

  selectActivity.forEach(activity =>
    activity.addEventListener("click", function () {
      const optionValue = activity.value;
      console.log(`${optionValue} correct`);

      const entireRow = document.getElementById(`entire_row__${iEntireRow++}`);
      const rowID = document.getElementById(`row__${iRow++}`);
      const actID = document.getElementById(`act_select__${iActivity++}`);
      const subactID = document.getElementById(
        `sub_activity_select__${iSubActivity++}`
      );

      document.getElementById("entire_row__1").style.backgroundColor = "pink";

      // if (
      //   iRow === iActivity &&
      //   iRow === iSubActivity &&
      //   optionValue === all.Activity[2]
      // ) {
      //   console.log("match");
      //   // selectSA.forEach(select => (select.innerHTML = ReportingSA));
      //   // subactID.innerHTML = ReportingSA;
      //   const selectID = function (number) {
      //     return `act_select__${number}`;
      //   };
      //   const exp = document.getElementById(`${selectID(iRow)}`);
      //   // exp.innerHTML = ReportingSA;
      //   console.log(iRow);
      // } else {
      //   selectSA.forEach(
      //     select => (select.innerHTML = "<option>oooo</option>")
      //   );
      // }
    })
  );
};

const addSubactvitity = function () {
  const selectSA = document.querySelectorAll(".select_SA");
  const subActivityRow = document.querySelectorAll(".subactivity");
  // selectSA.map(id => id);
  console.log(selectSA);
  selectSA?.forEach(select => console.log(select.id));
};

addButton.addEventListener("click", addRow);
addButton.addEventListener("click", addActivityCol);
addButton.addEventListener("click", addSubactvitity);
// addButton.addEventListener("click", addSA);
