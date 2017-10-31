package net.pmosoft.fframe.comm.db;

public class HsqldbInfo implements DbmsInfo {

	@Override
	public String dbConn() {
		return "jdbc:hsqldb:hsql://localhost/testdb";
	}

	@Override
	public String dbUser() {
		return "sa";
	}

	@Override
	public String dbPassword() {
		return "";
	}

	@Override
	public String dbDriver() {
		return "org.hsqldb.jdbcDriver";
	}
}
