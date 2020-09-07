# extract-value
A tool for pulling the object ID values from the Update Data string

Using the Value Extractor.

In BinderLog, open the datetime link on the left hand side of the entry from which you want to extract the update IDs.
Copy the entire block of text in the “Update Data” field. 
Go to https://extractvalues.netlify.app/
Paste the copied Update Data into the text box. Do not add anything else or manipulate the contents in any way. The script is very specific to taking an entire block of update data.
Click submit.
The data is returned in a table format. 
For large returns (2000+), use the following steps to copy the data into an Excel spreadsheet.
Copy the returned table
Paste into a column of your choice (start at row 2 if you want to use a header.)
Using “Format Cells”, select “Number” and set “Decimal Places” to 0. This is to avoid the `1 e+` occurrence of large numbers in spreadsheets.
For smaller returns, you should be able to paste directly into either Google Sheets or Excel. Google Sheets will require you to paste-plaintext or “Paste Values Only” as normal pasting will put the entire table in a single string in a single cell.

Notes: 
-Earlier, I had to “Paste Special” and select “Text” to paste the returned update IDs table into an Excel column. There may have been some invisible markup copied that prevented direct pasting. As of writing this document, I can simply `^V` the table into an Excel column.

-Google Sheets has a cell limit of 5 million. As a result, pasting in over 2236 rows creates a corresponding number of columns, causing Sheets to exceed its cell limit. If there’s a way around this besides parsing the returned data into smaller groups, please let me know.

-If you click the submit button more than once, it will add another table of the same data. If you did by accident, just reload the page, paste in the Update Data and submit again. 

-The returned data is not saved in any way, so saving the Update Data and the returned update IDs is up to you. 

