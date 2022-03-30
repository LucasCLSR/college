package atividades;

public class Aluno {
    private String nomeCompleto;
    private String curso;
    private int periodo;
    private float nota1;
    private float nota2;
    private int qnteFaltas;

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public int getPeriodo() {
        return periodo;
    }

    public void setPeriodo(int periodo) {
        this.periodo = periodo;
    }

    public float getNota1() {
        return nota1;
    }

    public void setNota1(float nota1) {
        this.nota1 = nota1;
    }

    public float getNota2() {
        return nota2;
    }

    public void setNota2(float nota2) {
        this.nota2 = nota2;
    }

    public int getQnteFaltas() {
        return qnteFaltas;
    }

    public void setQnteFaltas(int qnteFaltas) {
        this.qnteFaltas = qnteFaltas;
    }

    public float media(float nota1, float nota2){
        return (nota1 + nota2)/2;
    }
}
