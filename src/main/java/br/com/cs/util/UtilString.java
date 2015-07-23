package br.com.cs.util;

/**
 * @author jsilva
 * 
 */
public class UtilString {
	public static boolean isVazio(String string) {
		return string == null || string.trim().equals("");
	}

	public static String[] substituiNuloPorVazio(String[] array) {
		for (int i = 0; i < array.length; i++) {
			String valor = array[i];
			if (valor == null)
				array[i] = "";
		}
		return array;
	}
}
