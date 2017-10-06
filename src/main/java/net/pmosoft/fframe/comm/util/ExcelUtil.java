package net.pmosoft.fframe.comm.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

public class ExcelUtil {

    
	public void downRsToExcel(ResultSet rs, String filePathNm) throws SQLException {
		Workbook xlsWb;
		Sheet sheet1;
		Row row = null;
		Cell cell = null;
		
		xlsWb = new HSSFWorkbook();
		sheet1 = xlsWb.createSheet("sheet1");
		
		//---------------------------------------
		// Header
		//---------------------------------------
		row = sheet1.createRow(0);
		ResultSetMetaData rsmd = rs.getMetaData();
		int colCnt = rsmd.getColumnCount();
		System.out.println("colCnt="+colCnt);
		for (int i = 0; i < colCnt; i++) {
			cell = row.createCell(i);
			System.out.println(rsmd.getColumnName(i+1));
			cell.setCellValue(rsmd.getColumnName(i+1));
		}
		
		//---------------------------------------
		// Data
		//---------------------------------------
		int j=1;
		while(rs.next()){
			row = sheet1.createRow(j);
			for (int i = 0; i < colCnt; i++) {
				cell = row.createCell(i);
				cell.setCellValue(rs.getString(i+1));
				System.out.println("i="+i+" "+rsmd.getColumnName(i+1)+"   "+rs.getString(i+1));				
			}
			System.out.println("j="+j);
			j++;
		}
	
		//---------------------------------------
		// Create Excel File
		//---------------------------------------
		try {
			File xlsFile = new File(filePathNm);
			FileOutputStream fileOut = new FileOutputStream(xlsFile);
			xlsWb.write(fileOut);
		} catch (FileNotFoundException fe) {
			System.out.println("FileNotFoundException >> "+ fe.toString());
		} catch (IOException ie) {
			System.out.println("IOException >> "+ ie.toString());
		}
	}
	

    public void downListToExcel(List<Map<String,String>> list, String filePathNm) throws SQLException {
        Workbook xlsWb;
        Sheet sheet1;
        Row row = null;
        Cell cell = null;
        
        xlsWb = new HSSFWorkbook();
        sheet1 = xlsWb.createSheet("sheet1");
       
        //---------------------------------------
        // Data
        //---------------------------------------
        for (int i = 0; i < list.size(); i++) {
            row = sheet1.createRow(i);
            int j=0;    
            for (Map.Entry<String, String> entry : list.get(i).entrySet()) {
                cell = row.createCell(j);
                if(i==0) {
                    cell.setCellValue(entry.getKey());
                    //System.out.println("entry.getKey() : " + entry.getKey());
                    
                }  else { 
                    cell.setCellValue(entry.getValue());
                    //System.out.println("entry.getValue() : " + entry.getValue());
                }
                j++;
                //System.out.println("Item : " + entry.getKey() + " Count : " + entry.getValue());
            }        
            System.out.println("i="+i);
        }
    
        //---------------------------------------
        // Create Excel File
        //---------------------------------------
        try {
            File xlsFile = new File(filePathNm);
            FileOutputStream fileOut = new FileOutputStream(xlsFile);
            xlsWb.write(fileOut);
            fileOut.close();

        } catch (FileNotFoundException fe) {
            System.out.println("FileNotFoundException >> "+ fe.toString());
        } catch (IOException ie) {
            System.out.println("IOException >> "+ ie.toString());
        }
    }	
	
    public List<Map<String,String>> xlsToList(String filePathNm) throws IOException {
        
        FileInputStream fis = new FileInputStream(filePathNm);
        HSSFWorkbook workbook = new HSSFWorkbook(fis);
        
        int rowindex = 0;
        int columnindex = 0;

        HSSFSheet sheet = workbook.getSheetAt(0);
        
        List<Map<String,String>> list = new ArrayList<Map<String,String>>();
        Map<String,String> map = new LinkedHashMap<String,String>();
        List<String> cols = new ArrayList<String>();

        int rows = sheet.getPhysicalNumberOfRows();
        for (rowindex = 0; rowindex < rows; rowindex++) {
            // 행을 읽는다
            HSSFRow row = sheet.getRow(rowindex);
            if (row != null) {
                // 셀의 수
                int cells = row.getPhysicalNumberOfCells();
                for (columnindex = 0; columnindex <= cells; columnindex++) {
                    // 셀값을 읽는다
                    HSSFCell cell = row.getCell(columnindex);
                    String value = "";
                    // 셀이 빈값일경우를 위한 널체크
                    if (cell == null) {
                        continue;
                    } else {
                        // 타입별로 내용 읽기
                        switch (cell.getCellType()) {
                        case HSSFCell.CELL_TYPE_FORMULA:
                            value = cell.getCellFormula();
                            break;
                        case HSSFCell.CELL_TYPE_NUMERIC:
                            value = cell.getNumericCellValue() + "";
                            break;
                        case HSSFCell.CELL_TYPE_STRING:
                            value = cell.getStringCellValue() + "";
                            break;
                        case HSSFCell.CELL_TYPE_BLANK:
                            value = cell.getBooleanCellValue() + "";
                            break;
                        case HSSFCell.CELL_TYPE_ERROR:
                            value = cell.getErrorCellValue() + "";
                            break;
                        }
                    }
                    
                    if(rowindex == 0){
                        cols.add(value);
                    } else {
                        map.put(cols.get(columnindex),value);
                    }
                }
                list.add(map);
            }
        }
        
        //System.out.println(list);
        
        return list;
    }   
    
}
