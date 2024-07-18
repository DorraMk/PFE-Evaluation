import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HiearchieService } from 'src/app/services/hiearchie.service';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-organigramme',
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.css']
})
export class OrganigrammeComponent implements OnInit {
    org: any;

  constructor(private service: HiearchieService ,private route: ActivatedRoute,
    private router: Router) { }
    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ];


    mat!:string;
    dataa: TreeNode[] = [];
    rawData:any
    parentNode: any; 
    newparent:string=''; 
    newchild:string='';
  ngOnInit(): void {
    console.log(this.data);
    
    this.service.getHierarchiee().subscribe((data) => {

      console.log(data);
      this.rawData=data; 
     
     this.rawData.forEach((pair: any[])=>
      {
        const parentNode: TreeNode = {
          data: (pair[0] +' : '+ pair[1]).toString(),
          expanded: true,
          children: [] 
        };
    console.log("before ",parentNode);
   // parentNode?.children?.push({ label: (pair[2] + ' : '+pair[3]).toString(), children: [] });
    console.log("after :",parentNode);
    this.dataa.push(parentNode);   
  })
      console.log(this.dataa);
      
      
     // console.log(this.dataa);  
      //const nodes: { [key: string]: TreeNode } = {};
     /*  data.forEach(element => {
        if (element != null) {
          const parts = element.split(",");
          const usrNomprenom = parts[0].trim();
          const superviseur = parts[1].trim();
          const fonction = parts[2].trim();
    
          const node: TreeNode = {
            expanded: true,
            type: 'person',
            data: {
              name: usrNomprenom,
              title: fonction
            },
            children: []
          };
    
          nodes[usrNomprenom] = node;
    
          if (superviseur === 'Direction générale') {
            this.data.push(node);
          } else {
            const supervisorNode = nodes[superviseur];
            if (supervisorNode) {
              if (!supervisorNode.children) {
                supervisorNode.children = [];
              }
              supervisorNode.children.push(node);
            }
          }
        }*/
     
      });
    
      /*Object.values(nodes)
        .sort((a, b) => this.compareFunction(a.data.title, b.data.title))
        .forEach(node => {
          if (!node.children || node.children.length === 0) {
            this.data.push(node);
            console.log("node", node);
          }
        });
    }); */
    
  }

/* 
compareFunction(a: string, b: string): number {
  const order: { [key: string]: number } = {
    'Direction générale': 1,
    'Direction administrative': 2,
    'Direction': 3,
    'Utilisateur administrative': 4,
    'Utilisateur': 5
  };
  console.log("data :",this.data)
  const orderA = order[a] || Number.MAX_SAFE_INTEGER;
  const orderB = order[b] || Number.MAX_SAFE_INTEGER;

  return orderA - orderB;
} */



}

  














  

