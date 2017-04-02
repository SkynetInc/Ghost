const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-southeast-2'});

const ecs = new AWS.ECS();
const settings = require("./settings-test.json");

// Check if cluster exists, if not create it
// var cluster = {
//   clusterName: 'develop'
// };
// ecs.describeCluster(cluster, function(err, data) {
//   if (err) {
//     console.log(err, err.stack);
//     ecs.createCluster(cluster, function(err, data) {
//       if (err) console.log(err, err.stack); // an error occurred
//       else console.log(data);           // successful response
//     });
//   }
//   else console.log(data);
// });

// Check if task definition exists, if not create it
// const task = {
//   //TODO detail task
// };
// ecs.describeTaskDefinition(task, function(err, data) {
//   if (err) {
//     console.log(err, err.stack);
//     ecs.createTaskDefinition(task, function(err, data) {
//       if (err) console.log(err, err.stack); // an error occurred
//       else console.log(data);           // successful response
//     });
//   }
//   else console.log(data);
// });

// Check if service exists, if not create it
// const service = {


// var services = {
//   services: [
//     'tank',
//   ],
//   cluster: 'develop'
// };
// ecs.describeServices(params, function(err, data) {
//   if (err) {
//     console.log(err, err.stack);
//     // create service if error, assuming missing
//     const service = {
//       desiredCount: 0, /* required */
//       serviceName: 'STRING_VALUE', /* required */
//       taskDefinition: 'STRING_VALUE', /* required */
//       clientToken: 'STRING_VALUE',
//       cluster: 'STRING_VALUE',
//       deploymentConfiguration: {
//         maximumPercent: 0,
//         minimumHealthyPercent: 0
//       },
//       loadBalancers: [
//         {
//           containerName: 'STRING_VALUE',
//           containerPort: 0,
//           loadBalancerName: 'STRING_VALUE',
//           targetGroupArn: 'STRING_VALUE'
//         },
//         /* more items */
//       ],
//       placementConstraints: [
//         {
//           expression: 'STRING_VALUE',
//           type: 'distinctInstance | memberOf'
//         },
//         /* more items */
//       ],
//       placementStrategy: [
//         {
//           field: 'STRING_VALUE',
//           type: 'random | spread | binpack'
//         },
//         /* more items */
//       ],
//       role: 'STRING_VALUE'
//     };
//     ecs.createService(service, function(err, data) {
//       if (err) console.log(err, err.stack);
//       else console.log(data);
//     });
//   }
//   else console.log(data);
// });


const taskDef = {
  containerDefinitions: [
    {
	    "command": [
	    ],

	    "cpu": 500,
	    "entryPoint": [
	    ],
	    "environment": [
	    ],
	    "essential": true,
	    "image": process.env.AWS_ACCOUNT_ID+".dkr.ecr.ap-southeast-2.amazonaws.com/tank/steam:"+process.env.CIRCLE_SHA1,
	    "logConfiguration": {
	      "logDriver": "awslogs",
	      "options": {
	        "awslogs-group": "logs-develop-steam",
	        "awslogs-region": "ap-southeast-2"
	      }
	    },
	    "memory": 512,
	    "name": "develop-steam-tank",
	    "portMappings": [
	      {
	        "containerPort": 2368,
	        "protocol": "tcp"
	      }
	    ],
	    "workingDirectory": ""
	  }
  ],
  family: 'develop-steam-tank'
};
ecs.registerTaskDefinition(taskDef, function(err, data) {
  if (err) {
    console.log(err, err.stack);
    return 1;
  }
  else console.log(data);
});

const update = {
  service: 'develop-steam-tank',
  cluster: 'tank',
  deploymentConfiguration: {
    maximumPercent: 200,
    minimumHealthyPercent: 100
  },
  desiredCount: 1,
  taskDefinition: 'develop-steam-tank'
};
ecs.updateService(update, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
