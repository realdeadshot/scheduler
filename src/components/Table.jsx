import React from "react";

import "../styles/App.css";

import NewApp from "./newApp";

function ReturnTab() {
  return (
    <table>
      <tbody>
        <tr>
          <td className="table">
            <NewApp day={0} />
          </td>
          <td>
            <NewApp day={1} />
          </td>
          <td>
            <NewApp day={2} />
          </td>
          <td>
            <NewApp day={3} />
          </td>
          <td>
            <NewApp day={4} />
          </td>
          <td>
            <NewApp day={5} />
          </td>
          <td>
            <NewApp day={6} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ReturnTab;
