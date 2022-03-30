package atividades;
import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        Aluno a1 = new Aluno();

        System.out.println("Qual é o nome completo do(a) aluno(a): ");
        a1.setNomeCompleto(scanner.nextLine());

        System.out.println("Qual o nome do curso: ");
        a1.setCurso(scanner.nextLine());

        System.out.println("Período: ");
        a1.setPeriodo(scanner.nextInt());

        System.out.println("Qual foi a primeira nota: ");
        a1.setNota1(scanner.nextFloat());

        System.out.println("Qual foi a segunda nota: ");
        a1.setNota2(scanner.nextFloat());

        System.out.println("\nVocê digitou as seguintes informações:\n");

        System.out.println("Nome do(a) aluno(a): " + a1.getNomeCompleto());
        System.out.println("Nome do curso: " + a1.getCurso());
        System.out.println("Período: " + a1.getPeriodo());
        System.out.println("Nota 1: " + a1.getNota1());
        System.out.println("Nota 2: " + a1.getNota2());

        System.out.println("\nE sua média foi: " + a1.media(a1.getNota1(), a1.getNota2()));

        System.out.println("\nFim do programa!");

    }

}
