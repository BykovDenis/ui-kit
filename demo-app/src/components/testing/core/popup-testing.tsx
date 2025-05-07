import "./popup-testing.css";
import Button from "@sber-risks-ui/core/button";
import FlexContainer from "@sber-risks-ui/core/flex-container";
import Popup from "../../../../../core/packages/popup/src";
import React, { useState } from "react";
import Icon from "@sber-risks-ui/icon";

const PopupTesting: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onExpandBtnClick = () => {
    setIsExpanded((isExpanded: boolean) => !isExpanded);
  };

  return (
    <>
      <table
        className="MuiTable-root calculations-history-list-table css-rqglhn-MuiTable-root"
        width="initial"
      >
        <thead className="MuiTableHead-root  table-head css-15wwp11-MuiTableHead-root">
          <tr className="MuiTableRow-root MuiTableRow-head  table-row-header css-1q1u3t4-MuiTableRow-root">
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            ></th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <span
                className="MuiButtonBase-root MuiTableSortLabel-root Mui-active mui-table-sort-label css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root"
                tabIndex={0}
                role="button"
                data-key="asOfDate"
              >
                AsOfDate
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
              </span>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <span
                className="MuiButtonBase-root MuiTableSortLabel-root mui-table-sort-label css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root"
                tabIndex={0}
                role="button"
                data-key="runTypeMode"
              >
                RunTypeMode
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
              </span>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <span
                className="MuiButtonBase-root MuiTableSortLabel-root mui-table-sort-label css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root"
                tabIndex={0}
                role="button"
                data-key="status"
              >
                Status
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
              </span>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <span
                className="MuiButtonBase-root MuiTableSortLabel-root mui-table-sort-label css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root"
                tabIndex={0}
                role="button"
                data-key="userName"
              >
                User
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
              </span>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              Publishing
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              Action
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell-header table-cell-header--align-center css-1ygcj2i-MuiTableCell-root"
              scope="col"
              colSpan="2"
            >
              <span
                className="MuiButtonBase-root MuiTableSortLabel-root mui-table-sort-label css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root"
                tabIndex={0}
                role="button"
                data-key="comment"
              >
                Comment
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiTableSortLabel-icon MuiTableSortLabel-iconDirectionAsc css-1vweko9-MuiSvgIcon-root-MuiTableSortLabel-icon"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
              </span>
            </th>
          </tr>
          <tr className="MuiTableRow-root MuiTableRow-head  table-row css-1q1u3t4-MuiTableRow-root">
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            ></th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <div width="98%" fontSize="14" className="sc-gKclnd jjoDBu">
                <div
                  dataUiKitComponent="datepicker"
                  width="100%"
                  data-test="as-of-date"
                  className="sc-iAKWXU cLMgkl"
                >
                  <div className="sc-cTAqQK lbDcSv">
                    <div width="100%" className="sc-bBHxTw iGikSX">
                      <div className="sc-iwjdpV hWTwdX">
                        <input
                          id="as-of-date"
                          name="asOfDate"
                          data-id="as-of-date"
                          dataUiKitComponent="datepicker"
                          height="40"
                          width="100%"
                          fontSize="12"
                          fontFamily='"SBSansInterface", "Open Sans", "Arial", sans-serif'
                          fontWeight="400"
                          color="rgb(238, 238, 238)"
                          type="text"
                          autoComplete="off"
                          className="sc-fKVqWL fgGcxi"
                          value=""
                        />
                        <div
                          name="asOfDate"
                          className="sc-cxpSdN gwWMHH underline"
                          color="rgba(185, 185, 185, 0.6)"
                          width="100%"
                        />
                      </div>
                      <div
                        height="20"
                        width="20"
                        transform="translateY(-50%)"
                        fontSize="14"
                        className="sc-giYglK eNIbNx"
                      >
                        <button
                          data-name="datepicker-calendar-btn-close"
                          dataUiKitComponent="datepicker"
                          className="sc-iJKOTD kJmyqO delete-button"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="24px"
                            height="24px"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            opacity="0.8"
                          >
                            <path
                              d="M7.5 2C8.329 2 9 2.671 9 3.5V4H15V3.5C15 2.671 15.671 2 16.5 2C17.329 2 18 2.671 18 3.5V4H20C20.552 4 21 4.335 21 4.75V20.25C21 20.664 20.552 21 20 21H4C3.448 21 3 20.664 3 20.25V4.75C3 4.335 3.448 4 4 4H6V3.5C6 2.671 6.671 2 7.5 2ZM6 9V18H18V9H6ZM11 15H9C8.448 15 8 14.552 8 14V12C8 11.448 8.448 11 9 11H11C11.552 11 12 11.448 12 12V14C12 14.552 11.552 15 11 15Z"
                              fill="rgb(238, 238, 238)"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <div width="98%" fontSize="14" className="sc-gKclnd jjoDBu">
                <div
                  data-test="run-type-modes"
                  id="9be79f28-7790-4556-ad65-b39b5a788532"
                  className="sc-jUosCB bActgo"
                >
                  <div height="40" className="sc-jQrDum hmaKAo">
                    <div className="sc-fvxzrP hxIYYX" />
                    <div className="sc-fWCJzd eFtVIe">
                      <div className="sc-dvQaRk bvnACq">
                        <input
                          id="run-type-modes"
                          name="runTypeMode"
                          fontSize="12"
                          height="40"
                          fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                          type="text"
                          fontWeight="400"
                          color="rgb(238, 238, 238)"
                          autoComplete="off"
                          className="sc-Galmp cpHyxo"
                          value=""
                        />
                        <div
                          name="runTypeMode"
                          className="sc-TBWPX gxVJfY underline"
                          color="rgba(185, 185, 185, 0.6)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <div width="98%" fontSize="14" className="sc-gKclnd jjoDBu">
                <div
                  data-test="reports-statuses"
                  id="ae1245a6-f3ef-4ebd-9666-d985873a97cd"
                  className="sc-jUosCB bActgo"
                >
                  <div height="40" className="sc-jQrDum hmaKAo">
                    <div className="sc-fvxzrP hxIYYX" />
                    <div className="sc-fWCJzd eFtVIe">
                      <div className="sc-dvQaRk bvnACq">
                        <input
                          id="reports-statuses"
                          name="status"
                          fontSize="12"
                          height="40"
                          fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                          type="text"
                          fontWeight="400"
                          color="rgb(238, 238, 238)"
                          autoComplete="off"
                          className="sc-Galmp cpHyxo"
                          value=""
                        />
                        <div
                          name="status"
                          className="sc-TBWPX gxVJfY underline"
                          color="rgba(185, 185, 185, 0.6)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            >
              <div width="98%" fontSize="14" className="sc-gKclnd jjoDBu">
                <div className="sc-lbhJGD ikHsav">
                  <div className="sc-iNGGcK gjMXEm">
                    <input
                      name="userName"
                      fontSize="12"
                      height="40"
                      color="rgb(238, 238, 238)"
                      fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                      type="text"
                      fontWeight="400"
                      autoComplete="off"
                      className="sc-gSQFLo bVoQBj"
                      value=""
                    />
                    <div
                      name="userName"
                      className="sc-jeraig jSkYCT underline"
                      color="rgba(185, 185, 185, 0.6)"
                    />
                  </div>
                </div>
              </div>
            </th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            ></th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
            ></th>
            <th
              className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium  table-cell table-cell-header--row-second css-1ygcj2i-MuiTableCell-root"
              scope="col"
              colSpan="2"
            >
              <div width="98%" fontSize="14" className="sc-gKclnd jjoDBu">
                <div className="sc-lbhJGD ikHsav">
                  <div className="sc-iNGGcK gjMXEm">
                    <input
                      name="comment"
                      fontSize="12"
                      height="40"
                      color="rgb(238, 238, 238)"
                      fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                      type="text"
                      fontWeight="400"
                      autoComplete="off"
                      className="sc-gSQFLo bVoQBj"
                      value=""
                    />
                    <div
                      name="comment"
                      className="sc-jeraig jSkYCT underline"
                      color="rgba(185, 185, 185, 0.6)"
                    />
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="MuiTableBody-root  table-body css-apqrd9-MuiTableBody-root">
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="64f5bf24-1e66-49ad-b89f-1fa470fc4237"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2023-10-10
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                MM
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2023-10-10, tradeSearch=AllActiveCpties(List(IRDLN_BR)); runTypeMode=Mm"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="64f5bf24-1e66-49ad-b89f-1fa470fc4237"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="64f5bf24-1e66-49ad-b89f-1fa470fc4237"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="33626ed0-465d-4d7e-a6be-fd2d0e513785"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-01-22
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 63; Failures: 2"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="33626ed0-465d-4d7e-a6be-fd2d0e513785"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <FlexContainer position="relative">
                <Button variant="outlined" onClick={onExpandBtnClick}>
                  Download{" "}
                  <Icon
                    name={
                      isExpanded ? "ic_24_chevron_up" : "ic_24_chevron_down"
                    }
                  />
                </Button>
                <Popup id="popup-1" isOpen={isExpanded}>
                  <FlexContainer flexDirection="column" alignItems="center">
                    <Button variant="outlined">Default data</Button>
                    <Button variant="outlined">Bucketed data</Button>
                  </FlexContainer>
                </Popup>
              </FlexContainer>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="33626ed0-465d-4d7e-a6be-fd2d0e513785"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="33626ed0-465d-4d7e-a6be-fd2d0e513785"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="965946b7-cd77-4e2d-861e-ddd9943fc020"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-01-25
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                MM
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-01-25, tradeSearch=ByTypologies(List(IRDLN_BR)); runTypeMode=Mm"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="965946b7-cd77-4e2d-861e-ddd9943fc020"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="965946b7-cd77-4e2d-861e-ddd9943fc020"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="f0774162-6e04-46ac-baeb-aec1ab9261b0"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-01-25
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Repo
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-01-25, tradeSearch=ByTypologies(List(IRDREPOREPO, EQDREPOREPO)); runTypeMode=Repo"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="f0774162-6e04-46ac-baeb-aec1ab9261b0"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="f0774162-6e04-46ac-baeb-aec1ab9261b0"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="24e290f8-e2f6-4d3e-8d63-7bbca807a3e7"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: Failed to search trades: TypeError: Cannot read properties of undefined (reading 'id')
    at Function.createId (/Users/16690750/node_modules/json-server/lib/server/mixins.js:58:39)
    at Function.insert (/Users/16690750/node_modules/lodash-id/src/index.js:47:49)
    at /Users/16690750/node_modules/lodash/lodash.js:4430:28
    at arrayReduce (/Users/16690750/node_modules/lodash/lodash.js:697:21)
    at baseWrapperValue (/Users/16690750/node_modules/lodash/lodash.js:4429:14)
    at LodashWrapper.wrapperValue (/Users/16690750/node_modules/lodash/lodash.js:9114:14)
    at create (/Users/16690750/node_modules/json-server/lib/server/router/plural.js:239:48)
    at Layer.handle [as handle_request] (/Users/16690750/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/16690750/node_modules/express/lib/router/route.js:144:13)
    at next (/Users/16690750/node_modules/express/lib/router/route.js:138:14); { ThSearchMaxVersionsFilter: { maybePreFilter: List({ ThFilter: { ActualDate:..."
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="24e290f8-e2f6-4d3e-8d63-7bbca807a3e7"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="24e290f8-e2f6-4d3e-8d63-7bbca807a3e7"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="45f9bfdf-e765-4ed5-8986-5fe4b75edc16"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 0; Failures: 1"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="45f9bfdf-e765-4ed5-8986-5fe4b75edc16"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <FlexContainer position="relative">
                  <Button variant="outlined" onClick={onExpandBtnClick}>
                    Download{" "}
                    <Icon
                      name={
                        isExpanded ? "ic_24_chevron_up" : "ic_24_chevron_down"
                      }
                    />
                  </Button>
                  <Popup isOpen={isExpanded} width={120} id="some-popup">
                    <FlexContainer
                      flexDirection="column"
                      alignItems="stretch"
                      gap={15}
                    >
                      <Button variant="outlined">Default data</Button>
                      <Button variant="outlined">Bucketed data</Button>
                    </FlexContainer>
                  </Popup>
                </FlexContainer>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="45f9bfdf-e765-4ed5-8986-5fe4b75edc16"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="45f9bfdf-e765-4ed5-8986-5fe4b75edc16"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="21158769-4a37-4e38-8b99-5b10e859c59c"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="21158769-4a37-4e38-8b99-5b10e859c59c"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="21158769-4a37-4e38-8b99-5b10e859c59c"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="db3f928d-6c87-4b09-8d02-a04fc11bf082"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="db3f928d-6c87-4b09-8d02-a04fc11bf082"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="db3f928d-6c87-4b09-8d02-a04fc11bf082"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="57ad38fc-d5af-4070-b13d-382307c8abde"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="57ad38fc-d5af-4070-b13d-382307c8abde"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="57ad38fc-d5af-4070-b13d-382307c8abde"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="213adc20-00ea-4bfe-9543-219ec206eab1"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: Calculation timeout. Duration has reached threshold 600 minutes"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="213adc20-00ea-4bfe-9543-219ec206eab1"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="213adc20-00ea-4bfe-9543-219ec206eab1"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="e84f04ac-c5fb-4cc3-917d-a032425dd315"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 0; Failures: 1"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="e84f04ac-c5fb-4cc3-917d-a032425dd315"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <button
                  data-report-id="e84f04ac-c5fb-4cc3-917d-a032425dd315-10"
                  width="155"
                  type="button"
                  color="rgb(238, 238, 238)"
                  fontSize="14"
                  fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  className="sc-ehCJOs Uppwr"
                >
                  Download{" "}
                  <div
                    aria-label="ChevronDown"
                    role="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--primary-main-color)",
                      width: "24px",
                      height: "24px",
                      rotate: "0deg",
                    }}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="e84f04ac-c5fb-4cc3-917d-a032425dd315"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="e84f04ac-c5fb-4cc3-917d-a032425dd315"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="1d6c202e-53b8-4311-a766-d9f8546b055a"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 0; Failures: 1"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="1d6c202e-53b8-4311-a766-d9f8546b055a"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <button
                  data-report-id="1d6c202e-53b8-4311-a766-d9f8546b055a-11"
                  width="155"
                  type="button"
                  color="rgb(238, 238, 238)"
                  fontSize="14"
                  fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  className="sc-ehCJOs Uppwr"
                >
                  Download{" "}
                  <div
                    aria-label="ChevronDown"
                    role="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--primary-main-color)",
                      width: "24px",
                      height: "24px",
                      rotate: "0deg",
                    }}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="1d6c202e-53b8-4311-a766-d9f8546b055a"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="1d6c202e-53b8-4311-a766-d9f8546b055a"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="0fa1f823-b252-483b-842e-aceffc37328a"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="0fa1f823-b252-483b-842e-aceffc37328a"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="0fa1f823-b252-483b-842e-aceffc37328a"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="5708ddc4-ef30-4089-baa3-c2c4c82ad70d"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="5708ddc4-ef30-4089-baa3-c2c4c82ad70d"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="5708ddc4-ef30-4089-baa3-c2c4c82ad70d"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="24d28582-da5d-4513-9877-514e19dcb096"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="24d28582-da5d-4513-9877-514e19dcb096"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="24d28582-da5d-4513-9877-514e19dcb096"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="b881c655-d4a9-451d-9fc3-fc07a6f26f0b"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: All products have filtered out. Nothing to calculate; runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="b881c655-d4a9-451d-9fc3-fc07a6f26f0b"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="b881c655-d4a9-451d-9fc3-fc07a6f26f0b"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="819be8c9-9fc2-4dfc-967d-5d3e934fc63d"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-01, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="819be8c9-9fc2-4dfc-967d-5d3e934fc63d"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="819be8c9-9fc2-4dfc-967d-5d3e934fc63d"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="0a980ff4-d7e3-4ad2-a491-2e58b0e480a3"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: Market data set override response object does not contain Result; id=c6195b26c15f3147dd95a2f6a03f959f9790a8f9; { original: 9866b1c3f893ec2baabbfdf4584e9c4b65878782; override: 811001c7b7a47be9f99d055b2485de5f288acb0d }"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="0a980ff4-d7e3-4ad2-a491-2e58b0e480a3"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="0a980ff4-d7e3-4ad2-a491-2e58b0e480a3"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="a1ad748d-4697-452d-82a7-b93cd14696e4"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-01
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: Market data set override response object does not contain Result; id=c0fefe38d4498d972a388f32e1022c38089d5005; { original: 2a5201484c454c5834e32c1c99d75b831021f9f3; override: 811001c7b7a47be9f99d055b2485de5f288acb0d }"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="a1ad748d-4697-452d-82a7-b93cd14696e4"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="a1ad748d-4697-452d-82a7-b93cd14696e4"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="2fc4c2e5-b6f3-406c-b84b-0465c67a460e"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-06
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No ProgressResult found by id=e12888fceb1589a3859e222601c5c8041fd10e71"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="2fc4c2e5-b6f3-406c-b84b-0465c67a460e"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="2fc4c2e5-b6f3-406c-b84b-0465c67a460e"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="c9567b04-cc32-43d5-a0d3-e4c3c995aeb6"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-16
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 34; Failures: 22"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="c9567b04-cc32-43d5-a0d3-e4c3c995aeb6"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <button
                  data-report-id="c9567b04-cc32-43d5-a0d3-e4c3c995aeb6-20"
                  width="155"
                  type="button"
                  color="rgb(238, 238, 238)"
                  fontSize="14"
                  fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  className="sc-ehCJOs Uppwr"
                >
                  Download{" "}
                  <div
                    aria-label="ChevronDown"
                    role="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--primary-main-color)",
                      width: "24px",
                      height: "24px",
                      rotate: "0deg",
                    }}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="c9567b04-cc32-43d5-a0d3-e4c3c995aeb6"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="c9567b04-cc32-43d5-a0d3-e4c3c995aeb6"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="c76b70a6-9550-448b-87f6-70748cabf8bf"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-23
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: No trade products uploaded; asOfDate=2024-05-23, tradeSearch=AllActiveCpties(List(IRDCF, IRDIRS, IRDCS, IRDFRA, IRDOSWP, CURRFXDFXD, CURROPTSMP, CURROPTBAR, CURROPTBAR2, CURRFXDSWLEG, COMSWAP, COMSWAPPHYS)); runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="c76b70a6-9550-448b-87f6-70748cabf8bf"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="c76b70a6-9550-448b-87f6-70748cabf8bf"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="e9b90d74-bea9-4f5d-9aa2-3380350c9ff8"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-05-23
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Cause: All products have filtered out. Nothing to calculate; runTypeMode=Default"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-failure"></i>
                  <div className="calculation-status-summary-status-container">
                    Failed
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root"></td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno" />
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="e9b90d74-bea9-4f5d-9aa2-3380350c9ff8"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="e9b90d74-bea9-4f5d-9aa2-3380350c9ff8"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="11f8e665-9d8f-4281-af6e-1199dd8561f7"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-06-03
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 0; Failures: 1"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="11f8e665-9d8f-4281-af6e-1199dd8561f7"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <button
                  data-report-id="11f8e665-9d8f-4281-af6e-1199dd8561f7-23"
                  width="155"
                  type="button"
                  color="rgb(238, 238, 238)"
                  fontSize="14"
                  fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  className="sc-ehCJOs Uppwr"
                >
                  Download{" "}
                  <div
                    aria-label="ChevronDown"
                    role="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--primary-main-color)",
                      width: "24px",
                      height: "24px",
                      rotate: "0deg",
                    }}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="11f8e665-9d8f-4281-af6e-1199dd8561f7"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="11f8e665-9d8f-4281-af6e-1199dd8561f7"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
          <tr className="MuiTableRow-root  table-row css-1q1u3t4-MuiTableRow-root">
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <button
                data-id="eb1b3fed-b823-4f2a-9cce-41e5fd18e4d2"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                className="sc-iCfMLu kNStqI"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
              >
                <div
                  aria-label="Info"
                  role="img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--primary-main-color)",
                    width: "24px",
                    height: "24px",
                    rotate: "0deg",
                  }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31 18c0 7.18-5.82 13-13 13S5 25.18 5 18 10.82 5 18 5s13 5.82 13 13Zm-2 0c0-6.075-4.925-11-11-11S7 11.925 7 18s4.925 11 11 11 11-4.925 11-11Zm-12 4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v4Zm0-9v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              2024-06-03
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="140px" fontSize="12" className="sc-gKclnd khIJHi">
                Default
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <span
                aria-label="Successes: 0; Failures: 1"
                className=""
                data-mui-internal-clone-element="true"
              >
                <div width="initial" fontSize="12" className="sc-gKclnd eukkbz">
                  <i className="status-indicator status-indicator-warning"></i>
                  <div className="calculation-status-summary-status-container">
                    Warning
                  </div>
                  <div className="calculation-status-summary-status-container" />
                </div>
              </span>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="120px" fontSize="12" className="sc-gKclnd hYACDg">
                Admin
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell table-cell--align-left css-1ex1afd-MuiTableCell-root">
              <button
                data-id="eb1b3fed-b823-4f2a-9cce-41e5fd18e4d2"
                width="125"
                type="button"
                color="rgb(238, 238, 238)"
                fontSize="14"
                fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                className="sc-ehCJOs cMyfqo"
              >
                Publish
              </button>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="155" fontSize="14" className="sc-gKclnd gyeIno">
                <button
                  data-report-id="eb1b3fed-b823-4f2a-9cce-41e5fd18e4d2-24"
                  width="155"
                  type="button"
                  color="rgb(238, 238, 238)"
                  fontSize="14"
                  fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  className="sc-ehCJOs Uppwr"
                >
                  Download{" "}
                  <div
                    aria-label="ChevronDown"
                    role="img"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--primary-main-color)",
                      width: "24px",
                      height: "24px",
                      rotate: "0deg",
                    }}
                  >
                    <svg
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div width="300" fontSize="12" className="sc-gKclnd dKEaKC">
                <div className="MuiBox-root css-1eyg36m" />
              </div>
            </td>
            <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium  table-cell css-1ex1afd-MuiTableCell-root">
              <div fontSize="14" className="sc-gKclnd iakxiH">
                <span
                  aria-label="Comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="eb1b3fed-b823-4f2a-9cce-41e5fd18e4d2"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="PencilLine"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.215 8.793a1 1 0 0 0-1.414 0l-13.5 13.5a1 1 0 0 0-.293.707v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l13.5-13.5a1 1 0 0 0 0-1.414l-4-4ZM9.008 23.414l9.028-9.028 2.586 2.586L11.594 26H9.008v-2.586Zm13.028-7.857-2.586-2.585 2.058-2.058 2.585 2.586-2.057 2.057ZM27.016 28h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
                <span
                  aria-label="Remove comment"
                  className=""
                  data-mui-internal-clone-element="true"
                >
                  <button
                    data-id="eb1b3fed-b823-4f2a-9cce-41e5fd18e4d2"
                    type="button"
                    color="rgb(238, 238, 238)"
                    fontSize="14"
                    className="sc-iCfMLu eCjRgy"
                    fontFamily="SBSansInterface, Open Sans, Arial, sans-serif"
                  >
                    <div
                      aria-label="Trash"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "var(--primary-main-color)",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9V7.708a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V9h2V7.708a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V9h2Zm11 4h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V13Zm-2 0H12v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot className="MuiTableFooter-root mui-table-footer css-9cgc89-MuiTableFooter-root">
          <tr className="MuiTableRow-root MuiTableRow-footer  table-row css-1q1u3t4-MuiTableRow-root">
            <td
              className="MuiTableCell-root MuiTableCell-footer MuiTableCell-sizeMedium MuiTablePagination-root  mui-table-pagination css-fikjyc-MuiTableCell-root-MuiTablePagination-root"
              colSpan="1000"
            >
              <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular MuiTablePagination-toolbar css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar">
                <div className="MuiTablePagination-spacer css-1psng7p-MuiTablePagination-spacer" />
                <p
                  className="MuiTablePagination-selectLabel css-pdct74-MuiTablePagination-selectLabel"
                  id=":r4:"
                >
                  Rows per page:
                </p>
                <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiTablePagination-input css-16c50h-MuiInputBase-root-MuiTablePagination-select">
                  <div
                    tabIndex={0}
                    role="combobox"
                    aria-controls=":r5:"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    aria-labelledby=":r4: :r3:"
                    id=":r3:"
                    className="MuiSelect-select MuiTablePagination-select MuiSelect-standard MuiInputBase-input css-194a1fa-MuiSelect-select-MuiInputBase-input"
                  >
                    25
                  </div>
                  <input
                    aria-invalid="false"
                    name=":r6:"
                    aria-hidden="true"
                    tabIndex="-1"
                    className="MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput"
                    value="25"
                  />
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiTablePagination-selectIcon MuiSelect-iconStandard css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="ArrowDropDownIcon"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                </div>
                <p className="MuiTablePagination-displayedRows css-levciy-MuiTablePagination-displayedRows">
                  1–25 of 244
                </p>
                <div className="sc-jtXEFf kbuuFk">
                  <button
                    className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
                    tabIndex="-1"
                    type="button"
                    disabled=""
                    aria-label="First Page"
                  >
                    <div
                      aria-label="PlayAlt1Fill"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "24px",
                        height: "24px",
                        rotate: "180deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.906 16.72a1.5 1.5 0 0 1 0 2.56l-13.624 8.325A1.5 1.5 0 0 1 11 26.325V9.675a1.5 1.5 0 0 1 2.282-1.28l13.624 8.325Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button
                    className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
                    tabIndex="-1"
                    type="button"
                    disabled=""
                    aria-label="Previous Page"
                  >
                    <div
                      aria-label="ChevronDown"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "24px",
                        height: "24px",
                        rotate: "90deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.375 13.22a1 1 0 0 1 1.343 1.476l-.093.085-10 8a1 1 0 0 1-1.147.072l-.103-.072-10-8a1 1 0 0 1 1.147-1.634l.103.072L18 20.72l9.375-7.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
                    tabIndex={0}
                    type="button"
                    aria-label="Next Page"
                  >
                    <div
                      aria-label="ChevronUp"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "24px",
                        height: "24px",
                        rotate: "90deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.375 13.22a1 1 0 0 1 1.146-.073l.104.072 10 8a1 1 0 0 1-1.147 1.634l-.103-.072L18 15.28l-9.375 7.5a1 1 0 0 1-1.322-.062l-.084-.093a1 1 0 0 1 .063-1.321l.093-.085 10-8Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
                    tabIndex={0}
                    type="button"
                    aria-label="Last Page"
                  >
                    <div
                      aria-label="PlayAlt1Fill"
                      role="img"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "24px",
                        height: "24px",
                        rotate: "0deg",
                      }}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M26.906 16.72a1.5 1.5 0 0 1 0 2.56l-13.624 8.325A1.5 1.5 0 0 1 11 26.325V9.675a1.5 1.5 0 0 1 2.282-1.28l13.624 8.325Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default PopupTesting;
