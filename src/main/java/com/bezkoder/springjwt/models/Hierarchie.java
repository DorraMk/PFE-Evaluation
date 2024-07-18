package com.bezkoder.springjwt.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Data

@Entity

@AllArgsConstructor

@NoArgsConstructor

@Table(name = "Hierarchie")

@IdClass(Hierarchie.HierarchieId.class)

public class Hierarchie implements Serializable {

 

                private static final long serialVersionUID = 1L;

 

                @Id

                private String matricule;

                @Id

                private String matSup;

 

                @Data

                @NoArgsConstructor

                @AllArgsConstructor

                public static class HierarchieId implements Serializable {

                               /** * */

                               private static final long serialVersionUID = 1L;

 

                               private String matricule;

 

                               private String matSup;

                }

 

}
